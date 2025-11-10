const http = require('http');
const stu = require('./students.json');
const fs = require('fs');
const url = require('url');
const port = 3001;

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");

    if (req.method == 'GET' && req.url == '/') {
        res.write("<h1 style='color:red'>Welcome</h1>");
        res.end();
    }

    if (req.method == 'GET' && req.url == "/list") {
        fs.readFile("./students.json", function (err, data) {
            if (err) {
                res.writeHead(500, { "Content-Type": "text/plain" });
                res.write("Error reading file");
                res.end();
                return;
            }
            res.write(data);
            res.end();
        });
    }

    if (req.method == 'POST') {
        let newStu = url.parse(req.url, true).query;
        stu.push(newStu);
        mywrite(stu);
        res.write("<h1>Student record added</h1>");
        res.end();
    }

    if (req.method == 'PUT' && req.url == "/update") {
        let upStu = url.parse(req.url, true).query;
        for (let s in stu) {
            if (stu[s]['roll'] == upStu['roll']) {
                stu[s]['name'] = upStu['name'];
                stu[s]['year'] = upStu['year'];
                stu[s]['branch'] = upStu['branch'];
                stu[s]['cgpa'] = upStu['cgpa'];
                mywrite(stu);
                res.write("Updated successfully");
                res.end();
                return;
            }
        }
        res.write("Student not found");
        res.end();
    }

    if (req.method == "DELETE") {
        let delStu = url.parse(req.url, true).query;
        for (let s in stu) {
            if (stu[s]['roll'] == delStu['roll']) {
                stu.splice(s, 1);
                mywrite(stu);
                res.write("Deleted");
                res.end();
                return;
            }
        }
        res.write("Student not found");
        res.end();
    }
});

function mywrite(data) {
    fs.writeFile("./students.json", JSON.stringify(data), function (err) {
        if (err) {
            console.error("Error writing file", err);
        }
    });
}

server.listen(port, function () {
    console.log("Server is running on port " + port);
});