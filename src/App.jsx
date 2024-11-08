import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [image, setImage] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] =useState("-- None --");
  const [graduationYear, setGraduationYear] = useState();
  const [graduated, setGraduated] = useState(false);



  function handleAddStudent(e) {
    e.preventDefault();
    
    

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    }

    setStudents((prev) => [...prev, newStudent]);

    setImage("");
    setFullName("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
    setGraduationYear(2023);
    setGraduated(false);
  }

  
  function handleChange(e) {
    if(e.target.name === "fullName") {
      setFullName(e.target.value);
    }else if (e.target.name === "image") {
      setImage(e.target.value);
    } else if (e.target.name === "phone") {
      setPhone(e.target.value);
    }else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else if (e.target.name === "graduationYear") {
      setGraduationYear(e.target.value);
    }
  }

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent handleAddStudent={handleAddStudent} handleChange={handleChange}/>
      


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
