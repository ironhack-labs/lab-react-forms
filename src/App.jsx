import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phone, setPhoneNumber] = useState("");
  const [email, setEmailAddress] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [isGraduated, setIsGraduated] = useState(false);

  const handleNameInput = (e) => setFullName(e.target.value);
  const handleImageInput = (e) => setProfileImage(e.target.value);
  const handlePhoneInput = (e) => setPhoneNumber(e.target.value);
  const handleEmailInput = (e) => {
    setEmailAddress(e.target.value);
  };

  console.log("Email =>", email);
  console.log("Phone =>", phone);

  const handleProgramInput = (e) => setProgram(e.target.value);
  const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
  const handleIsGraduatedCheck = (e) => setIsGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newStudent = {
      fullName,
      profileImage,
      phone,
      email,
      program,
      graduationYear,
      isGraduated,
    };
    console.log("Submitted: ", newStudent);
    let newStudentList = [...studentsData, newStudent];

    setStudents(newStudentList);

    setFullName("");
    setProfileImage("");
    setPhoneNumber("");
    setEmailAddress("");
    setProgram("-- None --");
    setGraduationYear(2023);
    setIsGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleNameInput}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={profileImage}
              onChange={handleImageInput}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneInput}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailInput}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramInput}>
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
              value={isGraduated}
              onChange={handleIsGraduatedCheck}
            />
          </label>

          <button type="submit" onClick={handleSubmit}>
            Add Student
          </button>
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
