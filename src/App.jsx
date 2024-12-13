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

  function handleSubmit(event) {
    event.preventDefault()
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated
    }
    addStudent(newStudent)

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  }

  function addStudent(newStudent) {
    setStudents([newStudent, ...students])
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
            <input value={fullName} type="text" placeholder="Full Name" onChange={event => setFullName(event.target.value)} />
          </label>

          <label>
            Profile Image
            <input value={image} type="url" placeholder="Profile Image" onChange={event => setImage(event.target.value)} />
          </label>

          <label>
            Phone
            <input value={phone} type="tel" placeholder="Phone" onChange={event => setPhone(event.target.value)} />
          </label>

          <label>
            Email
            <input value={email} type="email" placeholder="Email" onChange={event => setEmail(event.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select value={program} onChange={event => setProgram(event.target.value)}>
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
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={event => setGraduationYear(event.target.value)}
            />
          </label>

          <label>
            Graduated
            <input checked={graduated} type="checkbox" onChange={event => setGraduated(event.target.checked)} />
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
