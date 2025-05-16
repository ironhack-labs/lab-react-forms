import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [nameInputValue, setNameInputValue] = useState("");
  const [imageInputValue, setImageInputValue] = useState("");
  const [phoneInputValue, setPhoneInputValue] = useState("");
  const [emailInputValue, setEmailInputValue] = useState("");
  const [programInputValue, setProgramInputValue] = useState("");
  const [graduationYearInputValue, setGraduationYearInputValue] =
    useState(2023);
  const [graduatedInputValue, setGraduatedInputValue] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const studentsToAdd = {
      fullName: nameInputValue,
      email: emailInputValue,
      phone: phoneInputValue,
      program: programInputValue,
      image: imageInputValue,
      graduationYear: graduationYearInputValue,
      graduated: graduatedInputValue,
    };

    setStudents((actualValueOfTheState) => {
      let newValueOfState = [...actualValueOfTheState, studentsToAdd];
      return newValueOfState;
    });

    //the form inputs should be cleared
    setNameInputValue("");
    setEmailInputValue("");
    setPhoneInputValue("");
    setProgramInputValue(""); 
    setImageInputValue("");
    setGraduationYearInputValue(2023);
    setGraduatedInputValue(false);
  };

  const handleNameChange = (event) => {
    setNameInputValue(event.target.value);
  };

  const handleImageChange = (event) => {
    setImageInputValue(event.target.value);
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
    setGraduationYearInputValue(event.target.value);
  };

  const handleGraduatedChange = (event) => {
    setGraduatedInputValue(event.target.checked);
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
              type="text"
              placeholder="Full Name"
              value={nameInputValue}
              onChange={handleNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={imageInputValue}
              onChange={handleImageChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phoneInputValue}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={emailInputValue}
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={programInputValue}
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
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYearInputValue}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduatedInputValue}
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
