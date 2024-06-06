import "./App.css";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import AddStudent from "./components/AddStudent";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent
         students={students} 
         setStudents={setStudents}
         />
     <TableHeader />
         {students && students.map((student) => (
           <StudentCard key={student.email} {...student} />
         ))}
    </div>
  );
}

export default App;
