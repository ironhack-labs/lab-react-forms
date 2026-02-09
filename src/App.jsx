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
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const nameInput=(event)=>{
     setFullName(event.target.value)
  }
  const imageInput=(event)=>{
     setImage(event.target.value)
  }
  const phoneInput=(event)=>{
     setPhone(event.target.value)
  }
  const emailInput=(event)=>{
     setEmail(event.target.value)
  }
  const programInput=(event)=>{
     setProgram(event.target.value)
  }
  const graduationYearInput=(event)=>{
      setGraduationYear(Number(event.target.value) || 0)
  }
  const graduatedInput=(event)=>{
      setGraduated(event.target.checked)
  }

  const submitForm=(event)=>{
     event.preventDefault()
     const newStudent={
      fullName:fullName,
      email:email,
      phone:phone,
      program:program,
      image:image,
      graduationYear:graduationYear,
      graduated:graduated
     }
      const clone=[...students]
      clone.push(newStudent)
      setStudents(clone)
     /*setStudents((cloneStudents)=>{
        const allStudents=cloneStudents.push(newStudent)
        return allStudents
     })*/
  }
  


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={submitForm}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={nameInput}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={imageInput} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={phoneInput} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={emailInput} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={programInput}>
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
              onChange={graduationYearInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={graduatedInput}/>
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
