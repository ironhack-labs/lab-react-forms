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
  const [graduationYear, setGraduationYear] = useState(0)
  const [graduated, setGraduated] = useState(false)


  const handleSubmit = (event) =>{
    event.preventDefault()
  
    //nou objecte amb la info de l'estudiant que introduirá l'usuari
    const newStudent ={
      fullName,
      image, 
      phone,
      email,
      program,
      graduationYear,
      graduated,
    }
      //afegir nou estudiant a l'array
      setStudents((prevStudents) => [...prevStudents, newStudent])

      //buidar els camps del formulari
      setFullName("");
      setImage("");
      setPhone("");
      setEmail("");
      setProgram("");
      setGraduationYear(0);
      setGraduated(false);
  }



  const handleNameChange = (event) =>{
    setFullName(event.target.value)
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit ={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" value={fullName} onChange={handleNameChange} type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" value={image} onChange={(e) => setImage(e.target.value)} type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(e) => setProgram(e.target.value)}> 
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
              value ={graduationYear}
              onChange={(e) => setGraduationYear(e.target.value)}/>
          </label>

          <label>
            Graduated
            <input name="graduated" checked={graduated} onChange={(e) => setGraduated(e.target.value)} type="checkbox" />
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
