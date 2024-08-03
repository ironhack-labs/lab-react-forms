import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const [students, setStudents] = useState(studentsData);

  const handleFullNameInput = (e) => setFullName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleProgramInput = (e) => setProgram(e.target.value);
  const handleGraduationYearInput = (e) =>
    setGraduationYear(Number(e.target.value));
  const handleGraduatedInput = (e) => setGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (fullName && email) {
      const newStudent = {
        fullName,
        image,
        phone,
        email,
        program,
        graduationYear,
        graduated,
      };

      console.log("Submitted", newStudent);

      setStudents([...students, newStudent]);

      setFullName("");
      setImage("");
      setPhone("");
      setEmail("");
      setProgram("");
      setGraduationYear(2023);
      setGraduated(false);
    } else {
      console.log("Please fill in required fields");
    }
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <div className="AddStudent">
        <h4>Add a Student</h4>
        <form onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              name="fullName"
              type={fullName}
              onChange={handleFullNameInput}
              required
            />
          </label>

          <label>
            Profile Image :
            <input name="image" type={image} onChange={handleImageInput} />
          </label>

          <label>
            Phone:
            <input name="phone" type={phone} onChange={handlePhoneInput} />
          </label>

          <label>
            Email:
            <input
              name="email"
              type={email}
              onChange={handleEmailInput}
              required
            />
          </label>

          <label>
            Program:
            <select value={program} onChange={handleProgramInput}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year:
            <input
              type="number"
              name="graduationYear"
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYearInput}
            />
          </label>

          <label>
            Graduated:
            <input
              type="checkbox"
              name="graduated"
              checked={graduated}
              onChange={handleGraduatedInput}
            />
          </label>

          <button type="submit">Add Student</button>
        </form>
      </div>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => (
          <StudentCard key={student.email} {...student} />
        ))}
    </div>
  );
}

export default App;
