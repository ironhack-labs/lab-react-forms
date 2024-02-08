import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [imgage, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("pass");
  const [hasGratuated, setHasGraduated] = useState(false);
  const [program, setProgram] = useState("--None--");
  const [graduationYear, setGraduationYear] = useState(2023);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      imgage: "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-7.png",
      graduationYear: graduationYear,
      graduated: hasGratuated,
    };

    const updatedList = [newStudent, ...studentsData];
    setStudents(updatedList);

    setFullName("");
    setEmail("");
    setImage("");
    setPhone("");
    setProgram("--None--");
    setGraduationYear(2023);
    setHasGraduated(false);
  };

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
              placeholder="Full Name"
              // required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              // required
              value={imgage}
              onChange={(e) => {
                setImage(e.target.value);
              }}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              // required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              // required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              // required
              onChange={(e) => {
                setProgram(e.target.value);
              }}
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
              // required
              value={graduationYear}
              onChange={(e) => {
                setGraduationYear(e.target.value);
              }}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              // required
              checked={hasGratuated}
              onChange={(e) => {
                setHasGraduated(e.target.value);
              }}
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
