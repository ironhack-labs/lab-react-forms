import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

const handleFullName = (event) => {
  setFullName(event.target.value)  
}

const handleImage = (event) => {
  setImage(event.target.value)
}

const handlePhone = (event) => {
  setPhone(event.target.value)
}

const handleEmail = (event) => {
  setEmail(event.target.value)
}

const handleProgram = (event) => {
  setProgram(event.target.value)
}

const handleGraduationYear = (event) => {
  setGraduationYear(event.target.value)
}

const handleGraduated = (event) => {
  setGraduated(event.target.value)
}

const handleSubmit = (event) => {
  event.preventDefault();

  const newStudent = {
    fullName: fullName,
    email: email,
    phone: phone,
    program: program,
    image: image,
    graduationYear: graduationYear,
    graduated: graduated,
  };

  setStudents([...students, newStudent]);
  setFullName("");
  setImage("");
  setPhone("");
  setEmail("");
  setProgram("");
  setGraduationYear("");
  setGraduated("");
}


  return (
    <>
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleFullName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleImage}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handlePhone}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmail}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program"
            onChange={handleProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
              <option value=""></option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYear}
              />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduated} />
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
        </>
  );
}

export default App;
