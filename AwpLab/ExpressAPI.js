// Import express
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON data
app.use(express.json());

// Sample data (acts like a mini database)
let students = [
  { id: 1, name: "Alice", age: 20 },
  { id: 2, name: "Bob", age: 22 }
];

// ✅ CREATE - Add new student
app.post('/students', (req, res) => {
  const newStudent = req.body;
  students.push(newStudent);
  res.send({ message: "Student added successfully!", data: newStudent });
});

// ✅ READ - Get all students
app.get('/students', (req, res) => {
  res.send(students);
});

// ✅ READ (by ID)
app.get('/students/:id', (req, res) => {
  const student = students.find(s => s.id == req.params.id);
  student ? res.send(student) : res.status(404).send({ message: "Student not found" });
});

// ✅ UPDATE - Update student details
app.put('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = students.findIndex(s => s.id === id);
  if (index !== -1) {
    students[index] = { ...students[index], ...req.body };
    res.send({ message: "Student updated!", data: students[index] });
  } else {
    res.status(404).send({ message: "Student not found" });
  }
});

// ✅ DELETE - Remove a student
app.delete('/students/:id', (req, res) => {
  const id = parseInt(req.params.id);
  students = students.filter(s => s.id !== id);
  res.send({ message: "Student deleted!" });
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));