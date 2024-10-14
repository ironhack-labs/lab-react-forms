import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  // Function to handle adding a new student!!!
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]); // Add new student to the students array!!!
  };

  return (
    <div className="App pt-20">
      <Navbar />


      <AddStudent handleAddStudent={handleAddStudent} />


      <TableHeader />


      {students.map((student) => (
        <StudentCard key={student.email} {...student} />
      ))}
    </div>
  );
}

export default App;
