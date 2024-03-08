import "./App.css";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import {AddStudent} from "./components/AddStudent";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  // const nav = useNavigate();

  const [students, setStudents] = useState(studentsData);



  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent students={students} setStudents={setStudents}/>

     
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
