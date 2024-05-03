import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullname] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    let newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    }
    const newList = [newStudent, ...students];
    setStudents(newList);

    setFullname("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
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
            <input name="fullName" 
            type="text" 
            placeholder="Full Name" 
            onChange={(e) => { setFullname(e.target.value) }}
            value={fullName}
            />
          </label>

          <label>
            Profile Image
            <input name="image" 
            type="url" 
            placeholder="Profile Image" 
            onChange={(e) => { setImage(e.target.value) }}
            value={image}
            />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" 
            onChange={(e) => { setPhone(e.target.value) }}
            value={phone}
            />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" 
            onChange={(e) => { setEmail(e.target.value) }}
            value={email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program"
            onChange={(e) => { setProgram(e.target.value) }}
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
              onChange={(e) => { setGraduationYear(e.target.value) }}
            value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" 
            onChange={(e) => { setGraduated(e.target.checked) }}
            checked={graduated}
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
