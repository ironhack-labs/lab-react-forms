import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudents"

import studentsData from "./assets/students.json";




function App() {


    const [students, setStudents] = useState(studentsData);

    const addNewStudent = (newStudent) => {
      setStudents([...students, newStudent]);
    };



  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent handleAddStudent={addNewStudent} />

      <TableHeader />

      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
    
  );
}

export default App;
