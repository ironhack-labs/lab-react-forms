import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setBox] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleTelChange = (event) => {
    setTel(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCheckboxChange = (event) => {
    setBox(event.target.checked);
  };

  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
  };

  const handleGraduationYearChange = (event) => {
    setGraduationYear(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName: text,
      email: email,
      phone: tel,
      program: selectedProgram,
      image: url,
      graduationYear: parseInt(graduationYear),
      graduated: checkbox,
    };
    setStudents([...students, newStudent]);
    // Clear the form
    setText("");
    setUrl("");
    setTel("");
    setEmail("");
    setBox(false);
    setSelectedProgram("Web Dev");
    setGraduationYear("");
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              value={text}
              onChange={handleTextChange}
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              value={url}
              onChange={handleUrlChange}
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={tel}
              onChange={handleTelChange}
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={selectedProgram}
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
              value={graduationYear}
              onChange={handleGraduationYearChange}
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={checkbox}
              onChange={handleCheckboxChange}
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
