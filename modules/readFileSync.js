const fs = require('fs');
try {
    const data = fs.readFileSync('a.txt', 'utf8');
    console.log("File contents:");
    console.log(data);
} catch (err) {
    console.error("Error reading file:", err.message);
}
