import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App(props) {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("None");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function handleFormSubmit (event) {
    event.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    }
    props.setStudents(newStudent)
  }
  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={(e) => {
              setFullName(e.target.value);
            }} value={fullName} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={(e) => {
              setImage(e.target.value);
            }} value={image} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={(e) => {
              setPhone(e.target.value);
            }} value={phone} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={(e) => {
              setEmail(e.target.value);
            }} value={email} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={(e) => {
              setProgram(e.target.value);
            }} value={program} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange={(e) => {
              setGraduationYear(e.target.value);
            }} 
              value={graduationYear}
              name="graduationYear"
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
            <input onChange={(e) => {
              setGraduated(e.target.checked)
            }} checked={graduated} name="graduated" type="checkbox" />
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
