import "./App.css";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import { useState } from "react";
import studentsData from "./assets/students.json";
import AddStudents from "./components/Form";

function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudents setStudentData={setStudents} studentsData={students} />
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
