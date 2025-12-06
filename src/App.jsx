import "./App.css";
import { useState } from "react";

import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    // Add new student to top
    setStudents([newStudent, ...students]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* Add Student Form */}
      <AddStudent handleAddStudent={handleAddStudent} />

      {/* TABLE HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students.map((student) => (
        <StudentCard key={student.email} {...student} />
      ))}
    </div>
  );
}

export default App;
