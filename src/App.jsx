import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function handleFullNmae(event) {
    setFullName(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }
  function handGraduation(event) {
    setGraduationYear(event.target.value);
  }
  function handleProgram(event) {
    setProgram(event.target.value);
  }
  function handleGraduated(event) {
    setGraduated(event.target.checked);
  }
  function handleadd(e) {
    e.preventDefault();
    let newStudent = {
      fullName: fullName,
      image: image,
      phone: phone,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated,
    };
    setStudents((state)=>{
      return [...state,newStudent]
    })
  }
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleadd}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNmae}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmail}
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
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handGraduation}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
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
