import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudents from "./components/AddStudents";

function App() {

  const [students, setStudents] = useState(studentsData);
  
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function handleSubmit(event) {

    event.preventDefault();

    const newStudent = {
        fullName,
        email,
        phone,
        program,
        image,
        graduationYear,
        graduated
      }

    console.log(newStudent);

    setStudents([...students, newStudent]);
  }



  return (
    <div className="App pt-20">
      <Navbar />

      {/* TABLE/LIST HEADER */}
      <TableHeader  />

      <AddStudents handleSubmit={handleSubmit} fullName={fullName} setFullName={setFullName}
  image={image} setImage={setImage}
  phone={phone} setPhone={setPhone}
  email={email} setEmail={setEmail}
  program={program} setProgram={setProgram}
  graduationYear={graduationYear} setGraduationYear={setGraduationYear}
  graduated={graduated} setGraduated={setGraduated}/>

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
