import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);


  function handleAddStudent (event)  {
    event.preventDefault();

    const newStudent = {
      name: name,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };
    console.log (newStudent);
    
    setStudents ([newStudent, ...students]); 
    setName ("");
    setImage ("");
    setPhone ("");
    setEmail ("");
    setProgram ("");
    setGraduationYear (2023);
    setGraduated (false);
  }
  
  
  
  
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit = {handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
            value ={name}
            onChange ={(e) => setName (e.target.value)} 
            name="fullName" 
            type="text" 
            placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input 
            value = {image}
            onChange ={(e) => setImage (e.target.value)}
            name="image"
            type="url" 
            placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input
            value ={phone}
            onChange ={(e) => setPhone (e.target.value)}
            name="phone" 
            type="tel" 
            placeholder="Phone" />
          </label>

          <label>
            Email
            <input 
            value ={email}
            onChange ={(e) => setEmail (e.target.value)}
            name="email" 
            type="email" 
            placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
            name="program"
            value= {program}
            onChange ={(e) => setProgram (e.target.value)} >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
            value ={graduationYear}
            onChange ={(e) => setGraduationYear (e.target.value)}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
            checked ={graduated}
            onChange ={(e) => setGraduated (e.target.checked)} 
            name="graduated" 
            type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
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
