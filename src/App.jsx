import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";


import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);


  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState(""); 
  const [graduationYear, setGraduationYear] = useState(2023); 
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
  e.preventDefault();

  const newStudent = {
    fullName,
    image,
    phone,
    email,
    program,
    graduationYear,
    graduated,
  };

  setStudents([...students, newStudent]);

  
  setFullName('');
  setImage('');
  setPhone('');
  setEmail('');
  setProgram('web Dev');
  setGraduationYear(2023);
  setGraduated(false);
};

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent handleAddStudent={(newStudent) => {
        setStudents([...students, newStudent]);
      }} />


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
