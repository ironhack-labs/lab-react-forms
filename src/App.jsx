import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import { AddStudents } from "./components/AddStudents";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
/*   const [dataForm, setdataForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    image: "",
    program: "Web Dev",
    graduationYear: 2023,
    graduated: false,
  })

  console.log("Estado actual del formulario:", dataForm);
const handleSubmit = (e) => {
  e.preventDefault();
  setStudents([...students, dataForm])
}

const handleChange = (e) => {
  const { name , value , type, checked } = e.target

  setdataForm({
    ...dataForm,
    [name]: type === "checkbox" ? checked : value
  })
} */
const handleAddStudent = (newStudent) => {
  setStudents([...students, newStudent]);
};
  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudents handleAddStudent={handleAddStudent}/>


      {/* TABLE/LIST HEADER */}
      <TableHeader  />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
