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
const [phoneNumber, setPhoneNumber] = useState("")
const [email, setEmail] = useState("")
const [program, setProgram] = useState("")
const [graduationYear, setGraduationYeart] = useState("")
const [graduated, setGraduated] = useState("")

const handleFullName =(event) =>setFullName(event.target.value)
const handleImage =(event) =>setFusetImagellName(event.target.value)
const handlePhoneNumber =(event) =>setPhoneNumber(event.target.value)
const handleEmail =(event) =>setEmail(event.target.value)
const handleProgram =(event) =>setProgram(event.target.value)
const handleGraduationYear =(event) =>setGraduationYeart(event.target.value)
const handleGraduated =(event) =>setGraduated(event.target.value)

const handeForSubmit = (event) => {
  event.preventDefault()
  console.log("formulario")
}

const newStudent = {
  fullName,
  email,
  phoneNumber,
  program,
  image,
  graduationYear,
  graduated,
}


const clone= [...students]
clone.push(newStudent)
console.log(clone)
setStudents(clone)

setFullName("")
setImage("")
setPhoneNumber("")
setEmail("")
setProgram("")
setGraduationYeart(2023)
setGraduated(false)

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handeForSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImage} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phoneNumber} onChange={handlePhoneNumber}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmail} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year" value={graduationYear} onChange={handleGraduationYear}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={graduated} onChange={handleGraduated} />
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
