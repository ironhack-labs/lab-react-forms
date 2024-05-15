import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent.bonus";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  function handleAddStudent (student) {
    setStudents((prevStudents) => [student, ...prevStudents]);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent handleAddStudent={handleAddStudent} />

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
