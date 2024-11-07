import "./App.css";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import NewStudentForm from "./components/NewStudentForm/NewStudentForm";
import { useState } from "react";
import studentsData from "../src/assets/students.json"

function App() {

  const [students, setStudents] = useState(studentsData)

  const addNewStudent = (newStudent) => {
    const newStudents = [newStudent, ...students]
    setStudents(newStudents)
  }
  return (
    <div className="App pt-20">
      <Navbar />
      <TableHeader />
      <NewStudentForm
        addNewStudent={addNewStudent}
      />
    </div>
  )
}

export default App;
