import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullNameImput, setFullNameImput] = useState();
  const [imageImput, setImageImput] = useState();
  const [phoneImput, setPhoneImput] = useState();
  const [emailImput, setEmailImput] = useState();
  const [programSelect, setProgramSelect] = useState();
  const [graduationYearImput, setGraduationYearImput] = useState();
  const [graduatedImput, setGraduatedImput] = useState();

  const handleFullNameChange = (event) => {
    let realImputValue = event.target.value;
    setFullNameImput(realImputValue);
  };
  const handleImageChange = (event) => {
    let realImputValue = event.target.value;
    setImageImput(realImputValue);
  };
  const handlePhoneChange = (event) => {
    let realImputValue = event.target.value;
    setPhoneImput(realImputValue);
  };
  const handleEmailChange = (event) => {
    let realImputValue = event.target.value;
    setEmailImput(realImputValue);
  };
  const handleProgramChange = (event) => {
    let realImputValue = event.target.value;
    setFullNameImput(realImputValue);
  };
  const handleGraduationYearChange = (event) => {
    let realImputValue = event.target.value;
    setGraduationYearImput(realImputValue);
  };
  const handleGraduatedChange = (event) => {
    let realImputValue = event.target.value;
    setGraduatedImput(realImputValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName: fullNameImput,
      image: imageImput,
      phone: phoneImput,
      email: emailImput,
      program: programSelect,
      graduationYear: graduationYearImput,
      graduated: graduatedImput,
    };
    setStudents((event) => {
      let clone = JSON.parse(JSON.stringify(event));
      clone.unshift(newStudent);
      return clone;
    })
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
              placeholder="Full Name"
              value={fullNameImput}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={imageImput}
              onChange={handleImageChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phoneImput}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={emailImput}
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
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
              value={graduationYearImput}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduatedImput}
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
