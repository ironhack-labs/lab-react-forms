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
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

 function handleImage(e) {
    setImage(e.target.value)
  }

 function handlePhone(e) {
    setPhone(e.target.value)
  }

 function handleEmail(e) {
    setEmail(e.target.value)
  }

 function handleProgram(e) {
    setProgram(e.target.value)
  }

 function handleGraduationYear(e) {
    setGraduationYear(e.target.value)
  }

 function handleGraduated(e) {
    setGraduated(e.target.value)
  }

 function handleFullName(e) {
    setFullName(e.target.value)
  }
  
  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated
    }
    setStudents(() => [...students, newStudent])
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);

  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={(e) => handleSubmit(e)}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(e) => handleFullName(e)} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(e) => handleImage(e)}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(e) => handlePhone(e)}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => handleEmail(e)}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(e) => handleProgram(e)}>
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
              onChange={(e) => handleGraduationYear(e)}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={(e) => handleGraduated(e)}/>
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
