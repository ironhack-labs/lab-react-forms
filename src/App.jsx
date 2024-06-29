import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [text, setText] = useState("");
  const [url, setUrl]= useState("");
  const [tel, setTel]= useState("");
  const [email, setEmail]= useState("");
  const [checkbox, setCheckBox] = useState(false);
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023)

const handleTextInput = (event) => setText(event.target.value);
const handleUrlInput = (event) => setUrl(event.target.value);
const handleEmailInput = (event) => setEmail(event.target.value);
const handleTelInput = (event) => setTel(event.target.value);
const handleCheckBox = (event) => setCheckBox(event.target.checked);
const handleProgramInput = (event) => setProgram(event.target.value);
const handleGraduationYearInput = (event) => setGraduationYear(event.target.value);

const handleSubmit = (event) => {
  event.preventDefault();

  const newStudent = {
    fullName: text,
      image: url,
      phone: tel,
      email,
      program,
      graduationYear: graduationYear,
      graduated: checkbox,
  }

   setStudents([newStudent, ...students])

  setText("")
  setUrl("")
  setTel("")
  setEmail("")
  setCheckBox(false);
  setProgram("")
  setGraduationYear("")
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
            <input name="fullName" value={text} onChange={handleTextInput} type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" value={url} onChange={handleUrlInput} placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" value={tel} onChange={handleTelInput} placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" type="email" value={email} onChange={handleEmailInput} placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramInput}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              value={graduationYear}
              onChange={handleGraduationYearInput}
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
            <input name="graduated" type="checkbox" onChange={handleCheckBox} checked={checkbox}/>
          </label>

          <button type="submit" onChange={handleSubmit}>Add Student</button>
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
