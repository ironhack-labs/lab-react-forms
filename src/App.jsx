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
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [year, setYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const handleNameChange = (event) => setFullName(event.target.value);
  const handleImageChange = (event) => setImage(event.target.value);
  const handlePhoneChange = (event) => setPhone(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleProgramChange = (event) => setProgram(event.target.value);
  const handleYearChange = (event) => setYear(event.target.value);
  const handleGraduatedChange = (event) => setGraduated(event.target.checked);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("trying to add a student to the list");

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: year ? Number(year) : null,
      graduated: graduated,
    };

    setStudents((state) => [...state, newStudent]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label> Full Name </label>
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleNameChange}
            value={fullName}
          />

          <label>Profile Image </label>
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={handleImageChange}
            value={image}
          />

          <label>Phone </label>
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handlePhoneChange}
            value={phone}
          />

          <label>Email </label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email}
          />
        </div>

        <div>
          <label>Program </label>
          <select name="program" onChange={handleProgramChange} value={program}>
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>

          <label>Graduation Year </label>
          <input
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={handleYearChange}
            value={year}
          />

          <label>Graduated </label>
          <input
            name="graduated"
            type="checkbox"
            onChange={handleGraduatedChange}
            checked={graduated}
          />

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
