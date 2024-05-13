// App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudents";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* AddStudent component */}
      <AddStudent handleAddStudent={handleAddStudent} />

      <TableHeader />

      {/* Render StudentCard for each student */}
      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}
    </div>
  );
}

export default App;
