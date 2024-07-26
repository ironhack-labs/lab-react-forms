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
  const [program, setProgram] = useState("");
  const [email, setEmail] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function createStudent(event) {
    event.preventDefault();

    const newStudent = {
      fullName: fullName,
      image: image,
      phone: phone,
      program: program,
      email: email,
      graduationYear: graduationYear,
      graduated: graduated
    };
    const newStudentClone = structuredClone(students);
    newStudentClone.unshift(newStudent);
    setStudents(newStudentClone)

    setFullName("");
    setImage("");
    setPhone("");
    setProgram("");
    setEmail("");
    setGraduationYear(2023);
    setGraduated(false);
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
            <input onChange={(event) => setFullName(event.target.value)} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={(event) => setImage(event.target.value)} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={(event) => setPhone(event.target.value)} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={(event) => setEmail(event.target.value)} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={(event) => setProgram(event.target.value)} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={(event) => setGraduationYear(event.target.value)}
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
            <input onChange={(event) => setGraduated(event.target.checked)} name="graduated" type="checkbox" />
          </label>

          <button onClick={createStudent} type="submit">Add Student</button>
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
