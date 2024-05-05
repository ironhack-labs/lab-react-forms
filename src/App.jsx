import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [studentsBackup, setStudentsBackup] = useState(studentsData);

  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

  const [nameQuery, SetNameQuery] = useState('')

  const handleNewFullName = (event) => {
    const { value } = event.target
    setFullName(value)
  }

  const handleImage = (event) => {
    const { value } = event.target
    setImage(value)
  }

  const handlePhone = (event) => {
    const { value } = event.target
    setPhone(value)
  }

  const handleEmail = (event) => {
    const { value } = event.target
    setEmail(value)
  }

  const handleProgramChange = (event) => {
    const { value } = event.target
    setProgram(value)
  }

  const handleGraduationYear = (event) => {
    const { value } = event.target
    setGraduationYear(value)
  }

  const handleGraduated = (event) => {
    const { checked } = event.target
    setGraduated(checked)
  }

  const handleStudentSubmit = (event) => {
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

  const handleNameQuery = (event) => {
    const { value } = event.target
    SetNameQuery(value)
    filterStudentsByName(value)
  }

  const addNewStudent = (newStudent) => {
    const newStudentList = [newStudent, ...students]
    setStudents(newStudentList)

    const newStudentBackupList = [newStudent, ...studentsBackup]
    setStudentsBackup(newStudentBackupList)
  }

  const filterStudentsByName = (query) => {
    const filteredStudents = studentsBackup.filter(student => student.fullName.toLowerCase().includes(query))
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
            <input name="fullName" type="text" value={fullName} onChange={handleNewFullName} placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" value={image} onChange={handleImage} placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" value={phone} onChange={handlePhone} placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" type="email" value={email} onChange={handleEmail} placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramChange}>
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
            <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduated} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}

      {/* SEARCH FUNCTION START */}
      <div className="students-filter">
        <hr />
        <h3>Student Search</h3>
        <input
          type="text"
          placeholder="Input name to search here..."
          value={nameQuery}
          onChange={handleNameQuery}
        />
        <hr />
      </div>
      {/* SEARCH FUNCTION END */}


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
