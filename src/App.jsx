import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [ students, setStudents ] = useState(studentsData);

  // const [ fullName, setFullName ] = useState("");
  // const [ email, setEmail ] = useState("");
  // const [ phone, setPhone ] = useState("");
  // const [ image, setImage ] = useState("");
  // const [ program, setProgram ] = useState("Web Dev");
  // const [ graduationYear, setGraduationYear ] = useState(0);
  // const [graduated, setGraduated] = useState(false);

  const [newStudent, setNewStudent] = useState({
    fullName: "",
    email: "",
    phone: 0,
    image: "",
    program: "",
    graduationYear : "",
    graduated: false 
  })

  const handleChange = (e) => {
    setNewStudent({...newStudent, [e.target.name]: e.target.value})
  }

  // const handleFullNameInput = (e) => setFullName(e.target.value);
   
  // const handleEmailInput = (e) => setEmail(e.target.value);
    
  // const handlePhoneInput = (e) => setPhone(e.target.value);
    
  // const handleImageInput = (e) => setImage(e.target.value);
    
  // const handleProgramInput = (e) => setProgram(e.target.value);
    
  // const handleGraduatedInput = (e) => setGraduated(e.target.value);
    
  // const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault(); 

    // const student = {
    //   fullName,
    //   email,
    //   phone,
    //   image,
    //   program,
    //   graduationYear,
    //   graduated
    // };

    setStudents([...students, newStudent])

  }


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={(e) => handleChange(e)} name="fullName" type="text" placeholder="Full Name" />
            
          </label>

          <label>
            Profile Image
            <input onChange={(e) => handleChange(e)} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={(e) => handleChange(e)} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={(e) => handleChange(e)} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={(e) => handleChange(e)} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange={(e) => handleChange(e)}
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
            <input onChange={(e) => handleChange(e)} name="graduated" type="checkbox" />
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
