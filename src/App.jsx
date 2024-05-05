import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState("");
  const handleSub = (e) => {
    e.preventDefault()
    
    const newStudent = {
    fullName: fullName,
    email: email,
    phone: phone,
    program: program,
    image: profileImage,
    graduationYear: graduationYear,
    graduated: graduated
    
        
  }
  const newList = [newStudent, ...students]
  
  setStudents(newList)

  setFullName("")
  setProfileImage("")
  setPhone("")
  setEmail("")
  setProgram("")
  setGraduationYear("")
  setGraduated("")
}
  


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSub}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" defaultValue = {fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" defaultValue = {profileImage} onChange={(e) => setProfileImage(e.target.value)}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" defaultValue = {phone} onChange={(e) => setPhone(e.target.value)}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" defaultValue = {email} onChange={(e) => setEmail(e.target.value)}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" defaultValue = {program} onChange={(e) => setProgram(e.target.value)}>
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
              defaultValue = {graduationYear} onChange={(e) => setGraduationYear(e.target.value)}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" defaultChecked = {graduated} onChange={(e) => setGraduated(e.target.value)} />
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
