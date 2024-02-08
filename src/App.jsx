import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import Form from "./components/Form";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState(" ");
  const [image, setimage] = useState(" ");
  const [phone, setPhone] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [program, setProgram] = useState(" ");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    let newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };
    setStudents([newStudent, ...students]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <Form
        handleSubmit={handleSubmit}
        setFullName={setFullName}
        setimage={setimage}
        setPhone={setPhone}
        setEmail={setEmail}
        setProgram={setProgram}
        setGraduationYear={setGraduationYear}
        setGraduated={setGraduated}
      />
      {/* FORM END */}

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
