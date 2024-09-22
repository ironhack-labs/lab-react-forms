import "./App.css";
import { useState } from "react";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (newStudent) => {
    setStudents((students => [...students, newStudent]))
  }

  return (
    <>
    <AddStudent handleAddStudent={handleAddStudent}/>
    </>
  );
}

export default App;
