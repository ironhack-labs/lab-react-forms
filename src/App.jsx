import { useState } from "react";
import studentsData from "./assets/students.json";
import "./App.css";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

function App() {
  // state created to handle changes and update students
  const [students, setStudents] = useState(studentsData);

  // function created to add new students
  const handleAddStudent = (newStudent) => {
    // adds the new student; prevStudents used to provide the latest studentsData state
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  /* REFACTORING ALL INPUT FUNCTIONS TO USE ONLY ONE !!! IN AddStudent.jsx

  const handleFullNameChange = (event) => {
    // console.log(event.target.value)
    // let value = event.target.value
    setFullNameValue(event.target.value);
  };

  const handleProfileImageChange = (event) => {
    setProfileImageValue(event.target.value);
  };

  const handlePhoneValueChange = (event) => {
    setPhoneValue(event.target.value);
  };

  const handleEmailValueChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleProgramChange = (event) => {
    setProgramValue(event.target.value);
  };

  const handleGraduationYearChange = (event) => {
    setGraduationYearValue(event.target.value);
  };

  const handleGraduatedChange = (event) => {
    setGraduatedValue(event.target.value);
  };

*/

  return (
    <div className="App pt-20">
      <Navbar />

      {/* ********* ADD STUDENT FORM RENDERED HERE ********* */}
      <AddStudent handleAddStudent={handleAddStudent} />

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
