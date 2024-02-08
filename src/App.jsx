import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudents from './components/AddStudents'

function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <>
  {/* //Iteration 1 | Create state variables */}

      <TableHeader />
      <AddStudents students={students} setStudents={setStudents}/>
      <Navbar/>

      {
        students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })
      }
    </>
  )
}

export default App;
