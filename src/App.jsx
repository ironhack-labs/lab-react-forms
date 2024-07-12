import React, { useState } from "react";
import AddStudent from "./components/AddStudents";
import studentsData from "./assets/students.json";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents([newStudent, ...students]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent onAddStudent={handleAddStudent} />
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
