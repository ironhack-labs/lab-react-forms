import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import TableHeader from "./components/TableHeader/TableHeader";
import StudentCard from "./components/StudentCard/StudentCard";

import studentsData from "./Data/students.json"
import StudentForm from "./components/StudentForm/StudentForm";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addNewStudent = newStudent => {
    const fullStudentList = [newStudent, ...students]
    setStudents(fullStudentList)
  }



  return (
    <div className="App pt-20">
      <Navbar />

      <StudentForm addNewStudent={addNewStudent} />


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
