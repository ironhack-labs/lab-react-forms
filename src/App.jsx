import "./App.css";

import { useState } from "react";

import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleStudent = (student) => {
    setStudents([student, ...students]);
    // setStudents((prev) => [student, ...prev]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent handleAddStudent={handleStudent} />

      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}

      {students.map((student, index) => (
        <StudentCard key={index} {...student} />
      ))}

    </div>
  );
}

export default App;
