import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const createstudent = (studentDetails) => {

    // find out id for the movie that we want to add
    const studentIds = students.map(movieObj => movieObj.id);
    const maxId = Math.max(...studentIds);
    const nextId = maxId + 1;

    const newStudent = {
      ...studentDetails,
      id: nextId
    }

    const newArray = [newStudent, ...students];
    setStudents(newArray);
  }
    
  return (
    <>
    <div className="App pt-20">
      <Navbar />
      <AddStudent callbackToCreate={createstudent} />
      
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
    </>
  );
}


export default App;
