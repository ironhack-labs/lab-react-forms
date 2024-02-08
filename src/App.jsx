import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState("");
  const [picture, setPicture] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [isGraduated, setIsGraduated] = useState(false);


  const handleFullNameInput = (event) => setFullName(event.target.value);
  const handlePictureInput = (event) => setPicture(event.target.value);
  const handlePhoneInput = (event) => setPhone(event.target.value);
  const handleEmailInput = (event) => setEmail(event.target.value);
  const handleProgramInput = (event) => setProgram(event.target.value); 
  const handleGraduationInput = (event) => setGraduationYear(event.target.value);
  const handleIsGraduationInput = (event) => setIsGraduated(event.target.checked); 

 
  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: picture,
      graduationYear: graduationYear,
      graduated: isGraduated
    };


    const newStudentList = [newStudent, ...students];


    setStudents(newStudentList);
    setFullName("");
    setPicture("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setIsGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

    
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameInput} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={picture} onChange={handlePictureInput} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneInput} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailInput} />
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
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={isGraduated} onChange={handleIsGraduationInput} /> 
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* End of Form */}

      {/* Table/List Header */}
      <TableHeader />

      {/* Student List */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
