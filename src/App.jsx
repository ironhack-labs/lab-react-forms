import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function createStudent(event) {
     event.preventDefault(); 

    const newStudent = {
     /*  id: tasks.length + 1, */
      fullName: fullName,
      profileImage: profileImage,
      phone: phone,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    const studentsCopy = structuredClone(students);

    studentsCopy.unshift(newStudent);

    setStudents(studentsCopy);

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
            <input name="fullName" 
             value={fullName}
            onChange={(event) => setfullName(event.target.value)} 
            type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" 
            value={profileImage}
            onChange={(event) => setProfileImage(event.target.value)} 
            type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" 
            value={phone}
            onChange={(event) => setPhone(event.target.value)} 
            type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" 
            value={email}
            onChange={(event) => setEmail(event.target.value)} 
            type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program"
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
              name="graduationYear"
              value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)} 
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
            <input name="graduated" 
            value={graduated}
            onChange={(event) => setGraduated(event.target.checked)} 
            type="checkbox" />
          </label>

          <button onClick={(e) => createStudent(e)}>Add Student</button>
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
