import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  // Iteración 1
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);
  

  // Iteración 3
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName: fullName,
      image: image,
      phone: tel,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated
    };
    setStudents([newStudent, ...students]);

    setFullName("");
    setImage("");
    setTel("");
    setEmail("");
    setProgram("");
    setGraduationYear("");
    setGraduated("");
  }
  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      {/* Iteración 2 */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" value = {fullName} onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" value = {image} onChange={(e) => setImage(e.target.value)} type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" value = {tel} onChange={(e) => setTel(e.target.value)} type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value = {program} onChange={(e) => setProgram(e.target.value)}>
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
              value = {graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}
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
            <input checked = {graduated} onChange={(e) => setGraduated(e.target.checked)} name="graduated" type="checkbox" />
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
