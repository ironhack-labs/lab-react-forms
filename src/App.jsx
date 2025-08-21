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
  const [value, setValue] = useState("");

  const addStudentObj = {
    fullName,
    email,
    phone,
    program,
    image,
    graduationYear,
    graduated,
  };

  function handleChange(value) {
    setValue(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(addStudentObj);
    setStudents((preStudents) => [addStudentObj, ...preStudents]);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudents
        fullName={fullName}
        setFullName={setFullName}
        image={image}
        setImage={setImage}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        graduated={graduated}
        setGraduated={setGraduated}
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        program={program}
        setProgram={setProgram}
        handleAddStudents={handleSubmit}
        handleChange={handleChange}
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
