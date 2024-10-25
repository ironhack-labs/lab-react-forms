import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

 

  const handleFullNameInput = (e) => setFullName(e.target.value);

  const handleImageInput = (e) => setImage(e.target.value);

  const handlePhoneInput = (e) => setPhone(e.target.value);

  const handleEmailInput = (e) => setEmail(e.target.value);

  const handleProgramInput = (e) => setProgram(e.target.value);

  const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);

  const handleGraduatedInput = (e) => setGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {fullName, image, phone, email, program, graduationYear, graduated}

    setStudents([...students, newStudent])

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
            <input name="fullName" type="text" value={fullName} placeholder="Full Name" onChange={handleFullNameInput} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url"  value={image} placeholder="Profile Image" onChange={handleImageInput} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" value={phone} placeholder="Phone"  onChange={handlePhoneInput}/>
          </label>

          <label>
            Email
            <input name="email" type="email" value={email} placeholder="Email"  onChange={handleEmailInput}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" checked={program} onChange={handleProgramInput}>
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
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYearInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduatedInput}  checked={graduated}/>
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
