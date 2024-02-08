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
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault()
    const newStudent = { fullName, image, phone, email, program, graduationYear, graduated }

    setStudents([newStudent, ...students])
    setEmail("")
    setFullName("")
    setPhone("")
    setProgram("")
    setGraduated(2023)
    setGraduated(false)
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
            <input onChange={(event) => { setFullName(event.target.value) }} id="fullName" type="text" />


          </label>

          <label>
            Profile Image
            <input onChange={(event) => { setProfImage(event.target.value) }} id="Profile" type="text" />
          </label>

          <label>
            Phone
            <input onChange={(event) => { setPhone(event.target.value) }} id="Phone" type="text" />
          </label>

          <label>
            Email
            <input onChange={(event) => { setEmail(event.target.value) }} id="Email" type="text" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              value={program} onChange={(event) => { setProgram(event.target.value) }}>
              <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            onChange={(event) => { setGraduationYear(event.target.value) }}
            value="graduationYear"
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
          <input checked={graduated} onChange={(event) => { setGraduated(event.target.check) }} id="Graduated" type="text" />
        </label>

        <button type="submit">Add Student</button>
    </div>

      </form >
    {/* FORM END */ }


  {/* TABLE/LIST HEADER */ }
  <TableHeader />


  {/* STUDENT LIST */ }
  {
    students &&
    students.map((student) => {
      return <StudentCard key={student.email} {...student} />;
    })
  }
    </div >
  );
}

export default App;
