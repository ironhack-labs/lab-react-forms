import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullNameInput, setfullNameInput] = useState("");
  const [imageInput, setImageInput] = useState("");
  const [phoneInput, setPhoneInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [programInput, setProgramInput] = useState("None");
  const [graduationYearInput, setGraduationYearInput] = useState(2023);
  const [graduatedInput, setGraduatedInput] = useState(false);

  const handleFullNameChange = (event) => {
    setfullNameInput(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageInput(event.target.value); //
  };
  const handlePhoneChange = (event) => {
    setPhoneInput(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailInput(event.target.value);
  };
  const handleProgramChange = (event) => {
    setProgramInput(event.target.value); 
  };
  const handleGraduationYearChange = (event) => {
    setGraduationYearInput(event.target.value); 
  };
  const handleGraduatedChange = (event) => {
    setGraduatedInput(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName: fullNameInput,
      email: emailInput,
      phone: phoneInput,
      program: programInput,
      image: imageInput,
      graduationYear: graduationYearInput,
      graduated: graduatedInput,
    };

let clone = JSON.parse(JSON.stringify(studentsData))
clone.push(newStudent)
setStudents(clone)

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
              onChange={handleFullNameChange}
              value={fullNameInput}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleImageChange}
              value={imageInput}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handlePhoneChange}
              value={phoneInput}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
              value={emailInput}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={programInput}
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
              value={graduationYearInput}
              onChange={handleGraduationYearChange}
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
              onChange={handleGraduatedChange}
              checked={graduatedInput}
            />
          </label>

          <button type="submit" >Add Student</button>
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
