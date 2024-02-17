import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

  const handleFullName = (event) => setName(event.target.value)
  const handleImage = (event) => setImage(event.target.value)
  const handlePhone = (event) => setPhone(event.target.value)
  const handleEmail = (event) => setEmail(event.target.value)
  const handleProgram = (event) => setProgram(event.target.value)
  const handleGraduationYear = (event) => setGraduationYear(event.target.value)
  const handleGraduated = (event) => setGraduated(event.target.value)
  

  const handleSubmit = (event) => {
    event.preventDefault()

    const addStudents = {
      fullName: fullName,
      image: image,
      phone: phone, 
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated

    }

    setStudents((estadoActual) => {
      const clone = JSON.parse(JSON.stringify(estadoActual))

      clone.unshift(addStudents)


      return clone
      
    })
  }
  



  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleFullName} name="fullName" type="text" placeholder="Full Name" 
            value={fullName} />
          </label>

          <label>
            Profile Image
            <input onChange={handleImage} name="image" type="url" placeholder="Profile Image" value={image}/>
          </label>

          <label>
            Phone
            <input onChange={handlePhone} name="phone" type="tel" placeholder="Phone" value={phone} />
          </label>

          <label>
            Email
            <input onChange={handleEmail} name="email" type="email" placeholder="Email" value={email} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={handleGraduationYear} 
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input onChange={handleGraduated} name="graduated" type="checkbox" checked={graduated}/>
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
