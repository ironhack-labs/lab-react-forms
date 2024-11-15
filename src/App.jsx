import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  function handleAddStudent(students) {
    setStudents([...students, student]);
  }
  //Done i think ^^
  //Thanks a bunch

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent
        handleAddStudent={handleAddStudent}
        callFoo={callFoo}
      ></AddStudent>

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
