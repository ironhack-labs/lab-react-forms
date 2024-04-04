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
  const [graduationYear, setGraduationYear] = useState(2023); // Default based on min validation
  const [graduated, setGraduated] = useState(false);

  // Handler functions for input changes (Iteration 2)
  const handleFullNameChange = (event) => setFullName(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleProgramChange = (event) => setProgram(event.target.value);
  const handleGraduationYearChange = (event) =>
    setGraduationYear(event.target.value);
  const handleGraduatedChange = (event) => setGraduated(event.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };
    setStudents([...students, newStudent]);
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
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input value={fullName} onChange={handleFullNameChange} required />
          </label>

          <label>
            Profile Image
            <input value={image} onChange={handleImageChange} required />
          </label>

          <label>
            Phone
            <input value={phone} onChange={handlePhoneChange} required />
          </label>

          <label>
            Email
            <input value={email} onChange={handleEmailChange} />
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
              value={graduationYear}
              onChange={handleGraduationYearChange}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              placeholder="Graduation Year"
              required
            />
          </label>

          <label>
            Graduated
            <input
              type="checkbox"
              name="graduated"
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
