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
  const [graduated, setGraduated] = useState(false);
  const [selectProgram, setSelectProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);

  const handleFullNameChange = (event) => setFullName (event.target.value)
  const handleImageChange = (event) => setImage (event.target.value)
  const handlePhoneChange = (event) => setPhone (event.target.value)
  const handleEmailChange = (event) => setEmail (event.target.value)
  const handleSelectProgramChange = (event) => setSelectProgram (event.target.value)
  const handleGuraduationYearChange = (event) => setGraduationYear (event.target.value)
  const handleGraduatedChange = (event) => setGraduated (event.target.value)

  const handleAddStudent = (event) => {
    event.preventDefault()

    const newStudent ={
      fullName: fullName,
      email: email,
      phone: phone,
      program: selectProgram,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    }
    console.log(newStudent)

    //* opción 1
    const clone = [...students]
    clone.push(newStudent)
    setStudents(clone)

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setSelectProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleFullNameChange} value={fullName}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleImageChange} value={image}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handlePhoneChange} value={phone}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmailChange} value={email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleSelectProgramChange} value={selectProgram}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange={handleGuraduationYearChange} value={graduationYear}
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
            <input name="graduated" type="checkbox" onChange={handleGraduatedChange} checked={graduated}/>
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
