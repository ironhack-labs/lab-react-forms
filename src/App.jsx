import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import Form from "./components/Form";

function App() {
  const [students, setStudents] = useState(studentsData);

  const addNewStudent = (newStudent => {
    setStudents([newStudent, ...students]);
  });

  return (
    <div className="App pt-20">
      <Navbar />

      <Form onSubmit={addNewStudent} />

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
