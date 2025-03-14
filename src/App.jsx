import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import { use } from "react";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);


  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
    <AddStudent setStudents = {setStudents} students = {students}/>

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
