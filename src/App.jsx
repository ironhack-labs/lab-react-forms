import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [program, setProgram] = useState("option1");

  const [graduationYear, setGraduationYear] = useState(2023);

  const [graduated, setGraduated] = useState(false);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleProgramChange = (e) => setProgram(e.target.value);
  const handleGraduationYearChange = (e) => setGraduationYear(Number(e.target.value));
  const handleGraduatedChange = (e) => setGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated
    };

    // Update students array
    setStudents([...students, newStudent]);

    // Optionally clear the form
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("option1");
    setGraduationYear(2023);
    setGraduated(false);
  };


  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          id="fullName"
          name="fullName"
          type="text"
          value={fullName}
          onChange={handleFullNameChange}
        />
      </div>
   
   
   <form>
    <input name="fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} type="text" />
    <input name="image" value={image} onChange={(e) => setImage(e.target.value)} type="url" />
    <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" />
    <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" />
    
    <select name="program" value={program} onChange={(e) => setProgram(e.target.value)}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </select>
    
    <input
      name="graduationYear"
      value={graduationYear}
      onChange={(e) => setGraduationYear(Number(e.target.value))}
      type="number"
      min="2023"
      max="2030"
      minLength="4"
      maxLength="4"
    />
    
    <input name="graduated" checked={graduated} onChange={(e) => setGraduated(e.target.checked)} type="checkbox" />
  </form>
  );
};

export default App;
