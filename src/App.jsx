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
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleImageChange = (e) => setImage(e.target.value);
  const handlePhoneChange = (e) => setPhone(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleProgramChange = (e) => setProgram(e.target.value);
  const handleGraduationYearChange = (e) => setGraduationYear(e.target.value);
  const handleGraduatedChange = (e) => setGraduated(e.target.checked);

  function handleAddStudent(student) {
    setStudents((prevStudents) => [student, ...prevStudents]);
  }

  function handleSubmit(e) {
    // Prevent form from refreshing page
    e.preventDefault();

    // Create new student object
    const newStudent = {
      students,
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    // Add new student to students array
    handleAddStudent(newStudent);

    // Reset form fields
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  }

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
              value={fullName}
              placeholder="Full Name"
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              value={image}
              placeholder="Profile Image"
              onChange={handleImageChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={phone}
              placeholder="Phone"
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
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
              value={graduationYear}
              onChange={handleGraduationYearChange}
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
              type="checkbox"
              onChange={handleGraduatedChange}
              checked={graduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* END FORM */}

      <TableHeader />

      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
