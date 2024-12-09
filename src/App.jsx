import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App(props) {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmails] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)
 

  const handleNameChange = (e) =>  setFullName(e.target.value)
  
  const handleImageChange = (e) =>  setImage(e.target.value)
  
  const handlePhoneChange = (e) =>  setPhone(e.target.value)
  
  const handleEmailsChange = (e) => setEmails(e.target.value)
  
  const handleProgramChange = (e) =>  setProgram(e.target.value)
  
  const handleGraduationYearChange = (e) =>  setGraduationYear(e.target.value)
  
  const handleGraductedChange = (e) =>  setGraduated(e.target.checked)


  const sumbitHandler = (e) => {
    e.preventDefault()
    const newStudent = {fullName, image, phone, email, program, graduationYear, graduated }
    console.log(newStudent)
    setStudents((prevStudents) => [...prevStudents, newStudent])
    setFullName('')
    setImage('')
    setPhone('')
    setEmails('')
    setProgram('')
    setGraduationYear(2023)
    setGraduated(false)
  }
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={sumbitHandler}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input value={fullName} name="fullName" type="text" placeholder="Full Name" onChange={handleNameChange} />
          </label>

          <label>
            Profile Image
            <input value={image} name="image" type="url" placeholder="Profile Image" onChange={handleImageChange} />
          </label>

          <label>
            Phone
            <input  value={phone} name="phone" type="tel" placeholder="Phone" onChange={handlePhoneChange}/>
          </label>

          <label>
            Email
            <input value={email} name="email" type="email" placeholder="Email" onChange={handleEmailsChange}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select value={program} name="program" onChange={handleProgramChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              value={graduationYear}
              onChange={handleGraduationYearChange}
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
            <input value={graduated} name="graduated" type="checkbox" onChange={handleGraductedChange}/>
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
