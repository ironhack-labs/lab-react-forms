import "./App.css";

import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";
import { useState } from "react";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
  setStudents((prevStudents)=> [newStudent, ...prevStudents]);
 };
 

// Iteration 2: Add a Student
return (
  <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent handleAddStudent={handleAddStudent} />


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
