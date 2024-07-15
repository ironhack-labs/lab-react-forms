import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState ("")
  const [image, setImage] = useState ("")
  const [phone, setPhone] = useState ("")
  const [email, setEmail] = useState ("")
  const [program, setProgram] = useState ("")
  const [graduationYear, setGraduationYear] = useState (0)
  const [graduated, setGraduated] = useState (false)
  const handleImputFullName = (event) => setFullName(event.target.value)
  const handleImputImage = (event) => setImage(event.target.value)
  const handleImputPhone = (event) => setPhone(event.target.value)
  const handleImputEmail = (event) => setEmail(event.target.value)
  const handleImputProgram = (event) => setProgram(event.target.value)
  const handleImputGraduationYear = (event) => setGraduationYear(event.target.checked)
  const handleImputGraduated = (event) => setGraduated(event.target.value)
  const handleAddStudent = (event) => {
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
    setStudents ((valorActualDelEstado) => {
      return [...valorActualDelEstado, newStudent]
    })
    setFullName('');
    setImage('');
    setEmail('');
    setPhone('');
    setProgram('');
    setImage('');
    setGraduationYear(0);
    setGraduated('');
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
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleImputFullName} value={fullName}/>
          </label>
          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleImputImage} value={image}/>
          </label>
          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleImputPhone} value={phone}/>
          </label>
          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleImputEmail} value={email}/>
          </label>
        </div>
        <div>
          <label>
            Program
            <select name="program" onChange={handleImputProgram} value={program}>
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
              onChange={handleImputGraduationYear} value={graduationYear}
            />
          </label>
          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleImputGraduated} checked={graduated}/>
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












