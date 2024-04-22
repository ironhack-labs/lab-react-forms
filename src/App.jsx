import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents((currentStudents) => [...currentStudents, newStudent]);
  };

  return (
    <div className="App">
      <AddStudent handleAddStudent={handleAddStudent} />
      {students.map((student) => (
        <StudentCard key={student.email} {...student} />
      ))}
    </div>
  );
}

export default App;
