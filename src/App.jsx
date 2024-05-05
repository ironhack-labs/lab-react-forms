import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import FilterByYear from "./components/Filter/Filter"

import studentsData from "./assets/students.json";

function App() {

  const [students, setStudents] = useState(studentsData)
  const [studentsBackup, setStudentsBackup] = useState(studentsData)
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)



  const handleFullName = event => {
    const { value } = event.target
    setFullName(value)
  }

  const handleImage = event => {
    const { value } = event.target
    setImage(value)
  }

  const handlePhone = event => {
    const { value } = event.target
    setPhone(value)
  }

  const handleEmail = event => {
    const { value } = event.target
    setEmail(value)
  }

  const handleProgram = event => {
    const { value } = event.target
    setProgram(value)
  }

  const handleGraduationYear = event => {
    const { value } = event.target
    setGraduationYear(value)
  }

  const handleGraduated = event => {
    const { checked } = event.target
    setGraduated(checked)
  }

  // Method to add new students
  const addNewStudent = newStudent => {
    const newStudents = [newStudent, ...students]
    setStudents(newStudents)

    const newStudentsBackup = [newStudent, ...studentsBackup]
    setStudentsBackup(newStudentsBackup)
  }


  //Add new students
  const handleStudentSubmit = event => {
    event.preventDefault()
    const newStudent = {
      fullName: fullName,
      image: image,
      phone: phone,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated
    }
    addNewStudent(newStudent)
  }

  // search by Year
  const filteredStudents = year => {
    const filteredStudents = studentsBackup.filter(element => element.graduationYear.toString() === year)
    setStudents(filteredStudents)
  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleStudentSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={handleProgram}
              value={program}
            >
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
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={handleGraduated}
            />
          </label>

          <button type="submit" value={"add new student"}>Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      <FilterByYear filterStudentsByYear={filteredStudents} />


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
