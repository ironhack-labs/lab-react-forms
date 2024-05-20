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
  const [program, setProgram] = useState(""); // Default value will be set later
  const [graduationYear, setGraduationYear] = useState(2023); // Default value set to min value
  const [graduated, setGraduated] = useState(false);

  // Handler functions for input changes
  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

  const handleGraduationYearChange = (e) => {
    setGraduationYear(parseInt(e.target.value)); // Ensure the value is parsed as an integer
  };

  const handleGraduatedChange = (e) => {
    setGraduated(e.target.checked);
  };

  // Handler function for form submission
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    // Create a new student object
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

    // Logic to add new student to the list of students goes here
    // Clear form inputs
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
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
              type="text"
              name="fullName"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              type="email"
              name="email"
              value={email}
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
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input
              type="checkbox"
              name="graduated"
              checked={graduated}
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
