import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [studentsDataCopy, setStudentsDataCopy] = useState(studentsData);

  const addNewStudent = (newStudent) => {
    // Create a new array
    const updatedStudents = [...students, newStudent];
    const updatedStudentsDataCopy = [...studentsDataCopy, newStudent];

    setStudents(updatedStudents);
    setStudentsDataCopy(updatedStudentsDataCopy);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent addStudent={addNewStudent} />
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
