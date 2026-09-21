const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON payloads
app.use(express.json());

// Mock in-memory database store
let students = [
  { id: 1, name: 'Alice', course: 'React' },
  { id: 2, name: 'Bob', course: 'Node.js' }
];

// GET /api/students - Retrieve all students
app.get('/api/students', (req, res) => {
  res.json(students);
});

// GET /api/students/:id - Retrieve a single student by ID
app.get('/api/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const student = students.find(s => s.id === studentId);

  if (!student) {
    return res.status(404).json({ error: 'Student not found' });
  }

  res.json(student);
});

// POST /api/students - Create a new student record
app.post('/api/students', (req, res) => {
  const { name, course } = req.body;

  if (!name || !course) {
    return res.status(400).json({ error: 'Name and course are required fields' });
  }

  const newStudent = {
    id: Date.now(),
    name,
    course
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// DELETE /api/students/:id - Remove a student record by ID
app.delete('/api/students/:id', (req, res) => {
  const studentId = parseInt(req.params.id);
  const studentIndex = students.findIndex(s => s.id === studentId);

  if (studentIndex === -1) {
    return res.status(404).json({ error: 'Student not found' });
  }

  students.splice(studentIndex, 1);
  res.status(200).json({ message: `Student with ID ${studentId} deleted successfully` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});