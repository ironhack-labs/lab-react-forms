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
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleImageChange = (event) => {
    setImage(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleProgramChange = (event) => {
    setProgram(event.target.value);
  };

  const handleGraduationYearChange = (event) => {
    setGraduationYear(event.target.value);
  };

  const handleGraduatedChange = (event) => {
    setGraduated(event.target.checked);
  };

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
    setGraduationYear("");
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
            <input name="fullName" type="text" placeholder="Full Name" value={fullName}
              onChange={handleFullNameChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image}
              onChange={handleImageChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone}
              onChange={handlePhoneChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email}
              onChange={handleEmailChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program}
              onChange={handleProgramChange}>
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
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated}
              onChange={handleGraduatedChange} />
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
