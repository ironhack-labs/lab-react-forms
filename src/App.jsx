import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form/Form"
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addNewStudent = (newStudent) => {
    const newStudents = [newStudent, ...students]
    setStudents(newStudents)
  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <Form addNewStudent={addNewStudent} />
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
