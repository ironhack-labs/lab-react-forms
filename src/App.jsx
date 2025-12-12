import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName ] = useState("");
  const [image, setImage ] = useState("");
  const [phone, setPhone ] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);
  
  const handleFullNameInput = (event) => setFullName(event.target.value);
  const handleImageInput = (event) => setImage(event.target.value);
  const handlePhoneInput = (event) => setPhone(event.target.value);
  const handleEmailInput = (event) => setEmail(event.target.value);
  const handleProgramInput = (event) => setProgram(event.target.value);
  const handleGraduationYearInput = (event) => setGraduationYear(event.target.value);
  const handleGraduatedInput = (event) => setGraduated(event.target.checked);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {fullName, image, phone, email, program, graduationYear, graduated};
    console.log("newStudent", newStudent)
    setStudents([newStudent, ...students])

    // REfresh to the original values after added:
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
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleFullNameInput} value={fullName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleImageInput} value={image}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handlePhoneInput} value={phone}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmailInput} value={email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramInput} value={program}>
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
              onChange={handleGraduationYearInput} value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduatedInput} checked={graduated}/>
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
