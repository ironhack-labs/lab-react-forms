import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState("");
  const [image, setImage]= useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

const addNewStudent =(event) => {

  event.preventDefault();

  const newStudent = {
    fullName: fullName,
    image: image,
    phone: phone,
    email: email,
    program: program,
    graduationYear: graduationYear,
    graduated: graduated,
  }
 
 const clone =  [newStudent, ...students]
  setStudents(clone);
}

const fullNameChange = (event)=> {setFullName(event.target.value)}
const imageChange = (event)=> {setImage(event.target.value)}
const phoneChange = (event)=> {setPhone(event.target.value)}
const emailChange = (event)=> {setEmail(event.target.value)}
const programChange = (event)=> {setProgram(event.target.value)}
const graduationYearChange = (event)=> {setGraduationYear(event.target.value)}
const graduatedChange = (event)=> {setGraduated(event.target.checked)}



  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={addNewStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={fullNameChange} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={imageChange} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={phoneChange} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={emailChange} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={programChange} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange={graduationYearChange}
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
            <input checked={graduated} onChange={graduatedChange} name="graduated" type="checkbox" />
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
