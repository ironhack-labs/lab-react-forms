import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {

  const [students, setStudents] = useState(studentsData);

  const addNewStudent = newStudent => {
    const studentCopy = [...students]          // Dado que unshift NO RETORNA UN NUEVO ARRAY es necesario sacar copia       
    studentCopy.unshift(newStudent)            // Manipular copia (no usar retorno, no retorna un nuevo array, NOOOO)
    setStudents(studentCopy)

  }

  const [fullName, setFullname] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

  const handleFullNameChange = event => setFullname(event.target.value)
  const handleImageChange = event => setImage(event.target.value)
  const handlePhoneChange = event => setPhone(event.target.value)
  const handleEmailChange = event => setEmail(event.target.value)
  const handleProgramChange = event => setProgram(event.target.value)
  const handleGraduationYearChange = event => setGraduationYear(event.target.value)
  const handleGraduationCheck = event => setGraduated(event.target.checked)

  const handleSubmitChanger = event => {

    event.preventDefault()

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    }
    addNewStudent(newStudent)
  }


  return (
    <div className="App pt-20"   >
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmitChanger} >
        <span>Add a Student</span>
        <div>
          <label >
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImageChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramChange}  >
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
              value={graduationYear}
              onChange={handleGraduationYearChange}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduationCheck} />
          </label>

          <button type="submit" onSubmit={handleSubmitChanger}>Add Student</button>
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


// addNewStudent = { addNewStudent }