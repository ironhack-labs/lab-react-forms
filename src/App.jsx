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
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState("2023");
  const [graduated, setGraduated] = useState(false);

  const handleSetFullName = (e) => setFullName(e.target.value);
  const handleSetImage = (e) => setImage(e.target.value);
  const handleSetPhone = (e) => setPhone(e.target.value);
  const handleSetEmail = (e) => setEmail(e.target.value);
  const handleSetProgram = (e) => setProgram(e.target.value);
  const handleSetGraduationYear = (e) => setGraduationYear(e.target.value);
  const handleSetGraduated = (e) => setGraduated(e.target.checked);

  function handleFormSubmit(event) {
    event.preventDefault()
    const studentInfo = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated
    }

    setStudents([...students, studentInfo]);
  }
  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleSetFullName} value={fullName}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleSetImage} value={image} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleSetPhone} value={phone} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleSetEmail} value={email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange= {handleSetProgram} value={program}>
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
              onChange={handleSetGraduationYear}
              value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleSetGraduated} checked={graduated}/>
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
