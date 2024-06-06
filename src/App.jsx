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
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);

  const [graduated, setGraduated] = useState(false);

  function handleNameChange(event) {
    setfullName(event.currentTarget.value);
  }

  function handleSetImage(event) {
    setImage(event.currentTarget.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.currentTarget.value);
  }

  function handleEmailChange(event) {
    setEmail(event.currentTarget.value);
  }

  function handleProgramChange(event) {
    setProgram(event.currentTarget.value);
  }

  function handleSetGraduationYear(event) {
    setGraduationYear(event.currentTarget.value);
    console.log(event);
  }

  function handleSubmitNewStudent(event, newStud) {
    event.preventDefault();
    console.log(newStud);
    setStudents([...students, newStud]);
  }

  /**
   * handleSubmit:  needs to create newstud object with they key values, execute submitNewStudent,
   */

  function handleSubmit(event) {
    const studentToCreate = {
      students,
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };
    console.log(studentToCreate);
    handleSubmitNewStudent(event, studentToCreate);
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
              placeholder="Full Name"
              value={fullName}
              onChange={handleNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image url"
              value={image}
              onChange={handleSetImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
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
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleSetGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={() => setGraduated(!graduated)}
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
          console.log(student);
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
