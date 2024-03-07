import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setName] = useState("");
  const [image, setImage] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [gradYear, setGradYear] = useState("--NONE--");
  const [graduated, setGraduated] = useState(false);

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName,
      image,
      phoneNumber,
      email,
      program,
      gradYear,
      graduated,
    };
    setStudents([...students, newStudent]);
    setName("");
    setImage("");
    setPhoneNumber("");
    setEmail("");
    setProgram("");
    setGradYear("--NONE--");
    setGraduated(false);
  };
  // const FormSubmission = ({ students, setStudents }) => {
  //   const [fullName, setName] = useState("");
  //   const [image, setImage] = useState("");
  //   const [phoneNumber, setPhoneNumber] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [program, setProgram] = useState("");
  //   const [gradYear, setGradYear] = useState("--NONE--");
  //   const [graduated, setGraduated] = useState(false);
  // };
  // const handleFullNameInput = (e) => setName(e.target.value);
  // const handleImageInput = (e) => setImage(e.target.value);
  // const handlePhoneNumberInput = (e) => setPhoneNumber(e.target.value);
  // const handleEmailInput = (e) => setEmail(e.target.value);
  // const handleProgramInput = (e) => setProgram(e.target.value);
  // const handleGradYearInput = (e) => setGradYear(e.target.value);
  // const handleGraduatedInput = (e) => setGraduated(e.target.value);

  return (
    <div className="App pt-20">
      <Navbar />
      {/* FORM */}
      <form className="student-form" onSubmit={handleFormSubmission}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              value={fullName}
              type="text"
              placeholder="Full Name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>

          <label>
            Profile Image
            <input
              value={image}
              type="url"
              placeholder="Profile Image"
              onChange={(event) => setImage(event.target.value)}
            />
          </label>

          <label>
            Phone
            <input
              value={phoneNumber}
              type="tel"
              placeholder="Phone"
              onChange={(event) => setPhoneNumber(event.target.value)}
            />
          </label>

          <label>
            Email
            <input
              value={email}
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              value={program}
              onChange={(event) => setProgram(event.target.value)}
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
              value={gradYear}
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={(event) => setGradYear(event.target.value)}
            />
          </label>

          <label>
            Graduated
            <input
              checked={graduated}
              type="checkbox"
              onChange={(event) => setGraduated(event.target.checked)}
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
// }
export default App;
