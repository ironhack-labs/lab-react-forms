import "./App.css";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import Form from './components/Form'
import studentsData from "./assets/students.json"
import { useState } from "react";
import StudentsFilter from "./components/StudentsFilter"




const App = () => {

  const [students, setStudents] = useState(studentsData)
  const [studentsBackup, setStudentsBackUp] = useState(studentsData)

  const addNewStudent = studentToAdd => {
    const newStudents = [studentToAdd, ...students]
    setStudents(newStudents)

    const newStudentsBackup = [studentToAdd, ...studentsBackup]
    setStudentsBackUp(newStudentsBackup)

  }


  const filterStudentsByName = query => {
    const filteredStudents = studentsBackup.filter(elm => elm.fullName.toLowerCase().includes(query))
    setStudents(filteredStudents)
  }



  return (
    <div className="App pt-20">
      <Navbar />


      <Form addNewStudent={addNewStudent} />

      <hr />

      <StudentsFilter filterStudentsByName={filterStudentsByName} />


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((students) => {
          return <StudentCard key={students.email} {...students} />;
        })}
    </div>
  );
}

export default App;
