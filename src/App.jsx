import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  // Crear los STATES

  const [students, setStudents] = useState(studentsData);
  const [fullNameInputValue, setFullNameInputValue] = useState("");
  const [profilImageInputValue, setProfilImageInputValue] = useState("");
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [programInputValue, setProgramInputValue] = useState("");
  const [graduationYearInputValue, setgraduationYearInputValue] =
    useState(2023);
  const [hasGraduatedValue, sethasGraduatedValue] = useState(false);

  // Linkear STATE con los inputs

  const handlefullNameChange = (event) => {
    setFullNameInputValue(event.target.value);
  };

  const handleprofilImageChange = (event) => {
    setProfilImageInputValue(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhoneInputValue(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmailInputValue(event.target.value);
  };

  const handleProgramChange = (event) => {
    setProgramInputValue(event.target.value);
  };

  const handleGraduationYearChange = (event) => {
    setgraduationYearInputValue(event.target.value);
  };

  const handlehasGraduatedChange = (event) => {
    sethasGraduatedValue(event.target.value);
  };

  // OnSubmit
  const handleAddStudentChange = (event) => {
    event.preventDefault();

    const studentToAdd = {
      fullName: fullNameInputValue,
      profilImage: profilImageInputValue,
      phone: phoneInputValue,
      email: emailInputValue,
      program: programInputValue,
      graduationYear: graduationYearInputValue,
      graduated: hasGraduatedValue,
    };
    setStudents([...students, studentToAdd]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudentChange}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handlefullNameChange}
              value={fullNameInputValue}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleprofilImageChange}
              value={profilImageInputValue}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handlePhoneChange}
              value={phoneInputValue}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmailChange}
              value={emailInputValue}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={handleProgramChange}
              value={programInputValue}
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
              onChange={handleGraduationYearChange}
              value={graduationYearInputValue}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={handlehasGraduatedChange}
              checked={hasGraduatedValue}
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
