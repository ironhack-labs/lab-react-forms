import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("None");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameInput = (e) => setfullName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleProgram = (e) => setProgram(e.target.value);
  const handleGraduationYear = (e) => setGraduationYear(e.target.value);
  const handleGraduated = (e) => setGraduated(e.target.checked);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear: Number(graduationYear),
      graduated,
    };

    setStudents([...students, newStudent]);

    setfullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("None");
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
              name="fullName"
              value={fullName}
              type="text"
              placeholder="Full Name"
              onChange={handleFullNameInput}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              value={image}
              type="url"
              placeholder="Profile Image"
              onChange={handleImageInput}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={phone}
              type="tel"
              placeholder="Phone"
              onChange={handlePhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              onChange={handleEmailInput}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgram}>
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
              value={graduationYear}
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              checked={graduated}
              type="checkbox"
              onChange={handleGraduated}
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
