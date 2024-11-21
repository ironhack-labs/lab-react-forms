import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import Form from "./components/Form";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <Form students = {students} setStudents = {setStudents}/>
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
