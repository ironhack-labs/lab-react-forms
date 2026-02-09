// src/App.jsx
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  // Existing students list
  const [students, setStudents] = useState(studentsData);

  // Form state
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState(""); // matches first option value=""
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  // Change handlers
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleProgramChange = (e) => setProgram(e.target.value);
  const handleGraduationYearChange = (e) =>
    setGraduationYear(Number(e.target.value));
  const handleGraduatedChange = (e) => setGraduated(e.target.checked);

  // Iteration 3 | Form submit handler
  const handleAddStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };

    // Add new student to the list
    setStudents([newStudent, ...students]);

    // Clear the form
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>

        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleImageChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={handleProgramChange}
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
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={handleGraduatedChange}
            />
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
