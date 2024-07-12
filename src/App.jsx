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
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);


  //update input
 

  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent
        students={students}
        setStudents={setStudents}
        fullName = {fullName}
        setFullName={setFullName}
        email = {email}
        setEmail={setEmail}
        image ={email}
        setImage={setImage}
        phone = {phone}
        setPhone={setPhone}
        program = {program}
        setProgram={setProgram}
        graduated = {graduated}
        setGraduated={setGraduated}
        graduationYear = {graduationYear}
        setGraduationYear={setGraduationYear}
      />

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
