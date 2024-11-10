import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduate, setGraduate] = useState("false");

  const handleNameInput = (e) => setName(e.target.value);
  const handleImageInput = (e) => setProfileImage(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleGraduatedInput = (e) => setGraduate(e.target.value);
  const handleProgramInput = (e) => setProgram(e.target.value);
  const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);

   const handleAddStudent = (e) => {
     e.preventDefault(); // Prevent page reload
     const newStudent = {
       id: students.length + 1,
       name,
       profileImage,
       phone,
       email,
       program,
       graduationYear,
       graduate,
     };
     setStudents([...students, newStudent]);
     // Clear form fields
     setName("");
     setProfileImage("");
     setPhone("");
     setEmail("");
     setProgram("");
     setGraduationYear("");
     setGraduate(false);
   };


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label htmlFor="name">
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleNameInput}
              value={name}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleImageInput}
              value={profileImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handlePhoneInput}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmailInput}
              value={email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={handleProgramInput}
              value={program}
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
              onChange={handleGraduationYearInput}
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
              onChange={handleGraduatedInput}
              checked={graduate}
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
