import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState('');
  const [profileImage, setProfileImage] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName,
      email,
      image: profileImage,
      phone: phoneNumber,
      program,
      graduationYear,
      graduated
    }
    setStudents([...students, newStudent]);
    setFullName('')
    setProfileImage('')
    setPhoneNumber('')
    setEmail('')
    setProgram('')
    setGraduationYear(2023)
    setGraduated(false)
  }

  const handleChange = (e, setter) => {
    setter(e.target.value);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent
        fullName={fullName}
        setFullName={setFullName}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        email={email}
        setEmail={setEmail}
        program={program}
        setProgram={setProgram}
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        graduated={graduated}
        setGraduated={setGraduated}
        handleSubmit={handleSubmit}
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
