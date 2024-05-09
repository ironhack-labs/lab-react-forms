import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameInput = (e) => {
    setfullName(e.target.value);
  };
  const handleImageInput = (e) => {
    setImage(e.target.value);
  };
  const handlePhoneInput = (e) => {
    setPhone(e.target.value);
  };
  const handleEmailInput = (e) => {
    setEmail(e.target.value);
  };
  const handleProgramInput = (e) => {
    setProgram(e.target.value);
  };
  const handleGraduationYearInput = (e) => {
    setGraduationYear(e.target.value);
  };
  const handleGraduatedInput = (e) => {
    setGraduated(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addStudent({
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    });
    setfullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
    setGraduationYear(0);
    setGraduated(false);
  };

  const addStudent = (newStudent) => {
    const updatedStudents = [newStudent, ...students];
    setStudents(updatedStudents);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              value={fullName}
              onChange={handleFullNameInput}
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              value={image}
              onChange={handleImageInput}
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={phone}
              onChange={handlePhoneInput}
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={email}
              onChange={handleEmailInput}
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={handleProgramInput}
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
              onChange={handleGraduationYearInput}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={handleGraduatedInput}
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
