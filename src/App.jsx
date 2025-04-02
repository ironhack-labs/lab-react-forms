import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import { AddStudent } from "./components/AddStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2025)
  const [graduated, setGraduated] = useState(false);

  const addStudent = (e) => {
    e.preventDefault();

    const studentsCopy = [...students];
    studentsCopy.unshift({
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    });
    setStudents(studentsCopy);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent fullName={fullName} setFullName={setFullName} image={image} setImage={setImage} phone={phone} setPhone={setPhone} email={email} setEmail={setEmail} program={program} setProgram={setProgram} graduationYear={graduationYear} setGraduationYear={setGraduationYear} graduated={graduated} setGraduated={setGraduated} addStudent={addStudent}/>
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
