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
  const [graduated, setGraduated] = useState(false)

  const handleSubmit = (event)=>{
    event.preventDefault();
    const newStudent = {fullName, email, phone, program, image, graduationYear,graduated}

    setStudents([newStudent, ...students]);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduated(2023);
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
            <input value={fullName} name="fullName" type="text" placeholder="Full Name" onChange={(event)=>{setFullName(event.target.value)}}/>
          </label>

          <label>
            Profile Image
            <input value={image} name="image" type="url" placeholder="Profile Image" onChange={(event)=>{setImage(event.target.value)}}/>
          </label>

          <label>
            Phone
            <input value={phone} name="phone" type="tel" placeholder="Phone" onChange={(event)=>{setPhone(event.target.value)}}/>
          </label>

          <label>
            Email
            <input value={email} name="email" type="email" placeholder="Email" onChange={(event)=>{setEmail(event.target.value)}}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select value={program} name="program" onChange={(event)=>{setProgram(event.target.value)}}>
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
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={(event)=>{setGraduationYear(event.target.value)}}
            />
          </label>

          <label>
            Graduated
            <input checked={graduated} name="graduated" type="checkbox" onChange={(event)=>{setGraduated(event.target.checked)}}/>
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
