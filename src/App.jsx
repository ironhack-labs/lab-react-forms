import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [studentName, setStudentName] = useState("")

  const [studentImage, setStudentImage] = useState("")
  const [studentTel, setStudentTel] = useState("")
  const [studentEmail, setStudentEmail] = useState("")
  const [studentProgram, setStudentProgram] = useState("")
  const [studentGratuationYear, setStudentGratuationYear] = useState(0)
  const [studentGradueted, setStudentGraduated]= useState(false)

  const handleInputName = (event) => setStudentName(event.target.value)
  const handleInputImage = (event) => setStudentImage(event.target.value)
  const handleInputTel = (event) => setStudentTel(event.target.value)
  const handleInputEmail = (event) => setStudentEmail(event.target.value)
  const handleInputProgram = (event) => setStudentProgram(event.target.value)
  const handleInputGradYear= (event) => setStudentGratuationYear(event.target.value)
  const handleInputGradueted= (event) => setStudentGraduated(event.target.value)

  const handleAddStudent = (event) => {
    event.preventDefault()
    const newStudent = {
      fullName: studentName,
      email: studentEmail,
      phone: studentTel,
      program: studentProgram,
      image: studentImage,
      graduationYear: studentGratuationYear,
      graduated: studentGradueted
    }

    setStudents((students) => {
      return[... students, newStudent]
    })

    setStudentName("")
    setStudentImage("")
    setStudentTel("")
    setStudentEmail("")
    setStudentProgram("")
    setStudentGratuationYear(0)
    setStudentGraduated(false)

  
  }



  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange ={handleInputName} value={studentName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange ={handleInputImage} value={studentImage}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange ={handleInputTel} value={studentTel} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange ={handleInputEmail} value={studentEmail} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange ={handleInputProgram} value={studentProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange ={handleInputGradYear} value={studentGratuationYear}
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
            <input name="graduated" type="checkbox" onChange ={handleInputGradueted} value={studentGradueted} />
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
