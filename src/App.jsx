import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // state type of inputs
  const [fullName, setFullName] = useState("");
  const [profileImg, setProfileImg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [gradYear, setGradYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  }

  const handleProfileImgChange = (e) => {
    setProfileImg(e.target.value);
  }

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleProgramChange = (e) => {
    setProgram(e.target.value);
  }

  const handleGradYearChange = (e) => {
    setGradYear(e.target.value);
  };

  const handleGraduatedChange = (e) => {
    setGraduated(!graduated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: profileImg,
      graduationYear: gradYear,
      graduated: graduated
    }
    
    setStudents([...students, newStudent])

    setFullName("")
    setProfileImg("")
    setPhone("")
    setEmail("")
    setProgram("")
    setGradYear(2023)
    setGraduated(false)
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
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={profileImg}
              onChange={handleProfileImgChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={handleProgramChange}
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
              value={gradYear}
              onChange={handleGradYearChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              value={!graduated}
              onChange={handleGraduatedChange}
            />
          </label>

          <button type="submit" onClick={handleSubmit}>
            Add Student
            </button>
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
