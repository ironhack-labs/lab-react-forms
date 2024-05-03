import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduation, setGraduation] = useState(2023);
  const [isGraduated, setIsGraduated] = useState("false");


  const handleNameInput = (e) => setFullName(e.target.value);

  const handleImgInput = (e) => setImg(e.target.value);

  const handlePhoneInput = (e) => setPhone(e.target.value);

  const handleEmailInput = (e) => setEmail(e.target.value);

  const handleProgramInput = (e) => setProgram(e.target.value);

  const handleGraduationInput = (e) => setGraduation(e.target.value);

  const handleIsGraduatedInput = (e) => setIsGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();


    const createStudent = { fullName , img , phone, email, program, graduation, isGraduated };
    setStudents([...students, createStudent]);

    // clear form
    setNames("");
    setPhone(0);
    setEmail("");
    setProgram("");
    setGraduation(2023);
    setIsGraduated("false");

  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" onChange={handleNameInput} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" onChange={handleImgInput} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" onChange={handlePhoneInput} />
          </label>

          <label>
            Email
            <input name="email" type="email" onChange={handleEmailInput} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramInput}>
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
              onChange={handleGraduationInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleIsGraduatedInput}  />
          </label>

          <button type="submit" onClick={handleSubmit}>Add Student</button>
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
