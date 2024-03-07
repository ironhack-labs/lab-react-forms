import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName,setFullName] = useState("");
  const [image,setImage] = useState("");
  const [phone,setPhone] = useState(0);
  const [email,setEmail] = useState("");
  const [program,setProgram] = useState("");
  const [graduatedYear,setGraduatedYear] = useState(2023);
  const [graduated,setGraduated] = useState(false);
 
  const newStudent = {fullName,image,phone,email,program,graduatedYear,graduated}
  
  const handleUpdateList = (event) => {
    event.preventDefault();
    setStudents([...students, newStudent])
    setFullName("")
    setEmail("")
    setGraduated(false)
    setGraduatedYear(2023)
    setImage("")
    setPhone(0)
  }



console.log(fullName,image,phone,email,program,graduatedYear,graduated)

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleUpdateList}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(event) => {
              setFullName(event.target.value);
            }}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(event) => {
              setImage(event.target.value);
            }}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(event) => {
              setPhone(event.target.value);
            }}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={(event) => {
              setEmail(event.target.value);
            }}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(event) => {
            setProgram(event.target.value)}}>
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
              value={graduatedYear}
              onChange={(event) => {
                setGraduatedYear(event.target.value);
              }}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={graduated} onChange={(event) => {
             setGraduated(event.target.checked);
            }}/>
          </label>

          <button type="submit" >Add Student</button>
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
