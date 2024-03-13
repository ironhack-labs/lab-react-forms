import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
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
    setGraduationYear(parseInt(event.target.value));
  };

  const handleGraduatedChange = (event) => {
    setGraduated(event.target.checked);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission here
  };

  return (
    <div className="App pt-20">
      <Navbar />
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>
          {/* Other input fields with similar structure */}
        </div>
        <div>
          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={handleGraduatedChange}
            />
          </label>
          <button type="submit">Add Student</button>
        </div>
      </form>
      <TableHeader />
      {studentsData.map((student) => (
        <StudentCard key={student.email} {...student} />
      ))}
    </div>
  );
}

export default App;
