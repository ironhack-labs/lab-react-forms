import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleSubmit = (e, newStudent) => {
    e.preventDefault();

    setStudents([...students, newStudent]);
  };

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent handleSubmit={handleSubmit} students={students} />
    </div>
  );
}

export default App;
