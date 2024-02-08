import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  

  function handleSubmit(newStudent) {
    
    const newStudentList = [...students, newStudent];

    setStudents(newStudentList);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent handleSubmit={handleSubmit}/>
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
