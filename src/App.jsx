import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullNameInput, setFullNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [phoneInput, setPhoneInput] = useState();
  const [emailInput, setEmailInput] = useState("");
  const [programSelect, setProgramSelect] = useState(0);
  const [graduationYearInput, setGraduationYearInput] = useState();
  const [graduatedInput, setGraduatedInput] = useState(false);

  const handleFullNameChange = (event) => {
    let realInputValue = event.target.value;
    setFullNameInput(realInputValue);
  };
  const handleImageChange = (event) => {
    let realInputValue = event.target.value;
    setImageInput(realInputValue);
  };
  const handlePhoneChange = (event) => {
    let realInputValue = event.target.value;
    setPhoneInput(realInputValue);
  };
  const handleEmailChange = (event) => {
    let realInputValue = event.target.value;
    setEmailInput(realInputValue);
  };
  const handleProgramChange = (event) => {
    let realInputValue = event.target.value;
    setProgramSelect(realInputValue);
  };
  const handleGraduationYearChange = (event) => {
    let realInputValue = event.target.value;
    setGraduationYearInput(realInputValue);
  };
  const handleGraduatedChange = (event) => {
    let realInputValue = event.target.checked;
    setGraduatedInput(realInputValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName: fullNameInput,
      image: imageInput,
      phone: phoneInput,
      email: emailInput,
      program: programSelect,
      graduationYear: graduationYearInput,
      graduated: graduatedInput,
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
              value={fullNameInput}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={imageInput}
              onChange={handleImageChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phoneInput}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={emailInput}
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramChange}>
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
              value={graduationYearInput}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduatedInput}
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
