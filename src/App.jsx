import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import studentsData from "./assets/students.json";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  const addStudent = (studentInput) => {
    setStudents([...students, studentInput]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent addStudent={addStudent} />

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={uuidv4()} {...student} />;
        })}
    </div>
  );
}

export default App;
