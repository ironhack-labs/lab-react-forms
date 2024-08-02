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

  const changeName = (e) => setFullName(e.target.value);
  const changeImage = (e) => setImage(e.target.value);
  const changePhone = (e) => setPhone(e.target.value);
  const changeEmail = (e) => setEmail(e.target.value);
  const changeProgram = (e) => setProgram(e.target.value);
  const changeGraduationYear = (e) => setGraduationYear(e.target.value);
  const changeGraduated = (e) => setGraduated(e.target.checked);

  const handleAddStudent = (e) => {
    e.preventDefault();
    if (!fullName || !email || !program) return;
    const obj = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };
    setFullName("");
    setEmail("");
    setPhone("");
    setProgram("");
    setImage("");
    setGraduationYear(2023);
    setGraduated(false);

    setStudents([...students, obj]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={changeName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={changeImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={changePhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={changeEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={changeProgram}>
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
              value={graduationYear}
              onChange={changeGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={changeGraduated}
            />
          </label>

          <button type="submit" onClick={handleAddStudent}>
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
