import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { ref, push, onValue } from "firebase/database";

export default function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [students, setStudents] = useState([]);

  // Read data in real time
  useEffect(() => {
    const studentRef = ref(db, "students");
    onValue(studentRef, (snapshot) => {
      const data = snapshot.val();
      const list = data ? Object.values(data) : [];
      setStudents(list);
    });
  }, []);

  // Add new student
  const addStudent = () => {
    if (name && roll) {
      push(ref(db, "students"), { name, roll });
      setName("");
      setRoll("");
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Student Management System</h2>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Roll Number"
        value={roll}
        onChange={(e) => setRoll(e.target.value)}
      />
      <button onClick={addStudent}>Add Student</button>

      <h3>Students List (Realtime)</h3>
      <ul>
        {students.map((s, i) => (
          <li key={i}>
            {s.name} — {s.roll}
          </li>
        ))}
      </ul>
    </div>
  );
}