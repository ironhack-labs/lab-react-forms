import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [fullName, setFullName] = useState("")
  const [image, setImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

  const [students, setStudents] = useState(studentsData);


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}


      <form onSubmit={(element) =>{

       element.preventDefault() 

       const newStudent = {
        fullName,
        image,
        phone,
        email,
        program,
        graduationYear: (graduationYear),
        graduated: graduated,
      };
    
      setStudents((prevStudents) => [newStudent, ...prevStudents]);
    
      // Reset form inputs to their default values
      setFullName("");
      setImage("");
      setPhone("");
      setEmail("");
      setProgram("");
      setGraduationYear(2023);
      setGraduated(false);
    }}>
       
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={(event) => setFullName(event.target.value)} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={(event) => setImage(event.target.value)} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone"  onChange={(event) => setPhone(event.target.value)} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email"  onChange={(event) => setEmail(event.target.value)}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(event) => setProgram(event.target.value)}>
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
              onChange={(event) => setGraduationYear(event.target.value)}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={(element) => setGraduated(element.target.value)} />
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
