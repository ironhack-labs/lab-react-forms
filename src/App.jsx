import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

  const handleFullNameChange = (e)=> {
    setFullName(e.target.value)
  }
  const handleImageChange = (e) => {
    setImage(e.target.value)
  }
  const handlePhoneChange = (e) => {
    setPhone(e.target.value)

  }
  const handleEmailChange = (e) => {
    setEmail(e.target.value)

  }
  const handleProgramChange = (e) => {
    setProgram(e.target.value)
  }
  const handleGraduationYearChange = (e)=> {
    setGraduationYear(e.target.value)
  }
  const handleGraduatedChange = (e) => {
    setGraduated(e.target.value)
  }
  const handleAddNewStudent = () => {
    // 1 Clone the students arr
    const studentsClone = [...students]

    //2 Get all information from the form as an Object
    const formObj = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated
    }

    // 3 Push into the clone all the information we got from the form
    
    console.log(formObj)
    studentsClone.push(formObj)
    //4 Update the state of students with the clone generated.
    setStudents(studentsClone)

    // 5 Clean all the form inputs
    
    setTimeout(()=>{
      setFullName("")
      setEmail("")
      setPhone("")
      setProgram("")
      setImage("")
      setGraduationYear(2023)
      setGraduated(false)

    },0)
  }
  // console.log(students)
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name='fullName' type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image"  onChange={handleImageChange} value={image} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handlePhoneChange} value={phone}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmailChange} value={email} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramChange} value={program}>
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
              onChange={handleGraduationYearChange}
              value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduatedChange} value={graduated} />
          </label>

          <button type="submit" onClick={handleAddNewStudent}>Add Student</button>
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
