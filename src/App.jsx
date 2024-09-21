import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [textValue, setTextValue] = useState("");
  const [urlValue, setUrlValue] = useState("");
  const [telephoneValue, setTelephoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [programValue, setProgramValue] = useState("");
  const [numberValue, setNumberValue] = useState(0);
  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleNameChange = (event) => {
    setTextValue(event.target.value);
  };
  const handleImageChange = (event) => {
    setUrlValue(event.target.value);
  };
  const handleTelephoneChange = (event) => {
    setTelephoneValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handleProgramChange = (event) => {
    setProgramValue(event.target.value);
  };
  const handleNumberChange = (event) => {
    setNumberValue(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.value);
  };
  

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let newStudent = {
      fullName: textValue,
      email: emailValue,
      phone: telephoneValue,
      program: programValue,
      image: urlValue,
      graduationYear: numberValue,
      graduated: checkboxValue,
    }

    setStudents((current) =>{
      let clone = [...current]
      clone.unshift(newStudent)
      return clone
    })
     

    }
  ;

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
              onChange={handleNameChange}
              value={textValue}
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              onChange={handleImageChange}
              value={urlValue}
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              onChange={handleTelephoneChange}
              value={telephoneValue}
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              name="email"
              onChange={handleEmailChange}
              value={emailValue}
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
              onChange={handleProgramChange}
              value={programValue}
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
              onChange={handleNumberChange}
              value={numberValue}
              type="number"
              placeholder="Graduation Year"
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
              onChange={handleCheckboxChange}
              checked={checkboxValue}
              type="checkbox"
            />
          </label>

          <button type="submit">
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
