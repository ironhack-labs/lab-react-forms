import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState({fullName:'', image:'', phone:'', email:'', program:"--None--", graduationYear: 2023, graduated: false})

  const handleChangeValues = (event)=>{
    // console.log(event.target)
    // console.log(event.target.value)
    const copia = structuredClone(newStudent)
    console.log(copia)
    copia[event.target.name] = event.target.value
    setNewStudent(copia)
  }
  const handleAddUser = (event)=>{
    event.preventDefault()
    console.log("intenando anadir un estudiante")
    setStudents((current)=> [newStudent, ...current])
    setNewStudent({fullName:'', image:'', phone:'', email:'', program:"--None--", graduationYear: 2023, graduated: false})
  }
  console.log(students)
  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent handleAddUser={handleAddUser}  handleChangeValues={ handleChangeValues} newStudent={newStudent}/>


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
