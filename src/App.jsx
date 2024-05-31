import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2024);
  const [graduated, setGraduated] = useState(false);

  const studentState = {
    students,
    setStudents,
    fullName,
    setFullName,
    image,
    setImage,
    phone,
    setPhone,
    email,
    setEmail,
    program,
    setProgram,
    graduationYear,
    setGraduationYear,
    graduated,
    setGraduated,
    handleAddStudent,
  };

  function handleAddStudent(event) {
    event.preventDefault();
    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };
    setStudents([newStudent, ...students]);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
    setGraduationYear(2024);
    setGraduated(false);
  }

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent {...studentState} />

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
