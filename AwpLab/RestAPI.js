const http = require('http');
const fs = require('fs');
const url = require ('url');

const file = "./data.json";
//define readDB and writeDB functions
const readDB = ()=>JSON.parse(fs.readFileSync(file));
const writeDB = (data) => fs.writeFileSync(file, JSON.stringify(data, null, 2));

// Helper function to parse JSON body
const parseBody = (req) => new Promise((resolve) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body ? JSON.parse(body) : {}));
});

http.createServer(async (req, res) => {
    const myUrl = new URL(req.url, `http://${req.headers.host}`);
    const pathname = myUrl.pathname;
    const id = parseInt(pathname.split('/')[2]);
    const students = readDB();

    res.setHeader('Content-Type', 'application/json');
    if (req.method === 'GET' && pathname === '/students') {
        return res.end(JSON.stringify(students));
    }
    if (req.method === 'GET' && pathname.startsWith('/students/')) {
        const student = students.find(s => s.id === id);
        return res.end(JSON.stringify(student || { message: 'Not found' }));
    }
    if (req.method === 'POST' && pathname === '/students') {
        const data = await parseBody(req);
        const student = { id: students.length ? students[students.length - 1].id + 1 : 1, ...data };
        students.push(student);
        writeDB(students);
        return res.end(JSON.stringify(student));
    }
    if (req.method === 'PUT' && pathname.startsWith('/students/')) {
        const data = await parseBody(req);
        const student = students.find(s => s.id === id);
        if (student) Object.assign(student, data);
        writeDB(students);
        return res.end(JSON.stringify(student || { message: 'Not found' }));
    }
    if (req.method === 'DELETE' && pathname.startsWith('/students/')) {
        const index = students.findIndex(s => s.id == id);
        if (index !== -1) students.splice(index, 1);
        writeDB(students);
        return res.end(JSON.stringify({ message: index !== -1 ? 'Deleted' : 'Not found' }));
    }
    res.end(JSON.stringify({ message: 'Route not found' }));
}).listen(3000, () => console.log('Server running on port 3000'));

