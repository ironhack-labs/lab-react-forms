import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import NewStudentForm from "./components/NewStudentForm";
import StudentsFilter from "./components/StudentsFilter";

import studentsData from "./assets/students.json";

function App() {

  const [students, setStudents] = useState(studentsData);
  const [studentsBackup, setStudentsBackup] = useState(studentsData)

  const addNewStudent = studentToAdd => {
    const newStudents = [studentToAdd, ...students]
    setStudents(newStudents)

    const newStudentsBackup = [studentToAdd, ...studentsBackup]
    setStudentsBackup(newStudentsBackup)
  }

  const filterStudentsByName = query => {
    const filteredStudents = studentsBackup.filter(elm => elm.fullName.toLowerCase().includes(query))
    setStudents(filteredStudents)
  }



  return (
    <div className="App pt-20">
      <Navbar />

      <NewStudentForm addNewStudent={addNewStudent} />

      <StudentsFilter filterStudentsByName={filterStudentsByName} />


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
