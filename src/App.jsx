import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";



function App() {
  const [students, setStudents] = useState(studentsData);

  // Iteration 1 create state variables
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");     // initialized with empty string, matching the first option value
  const [graduationYear, setGraduationYear] = useState("2023");     // initialized with minimum value 2023
  const [graduated, setGraduated] = useState(false);    // initialized with false by default

  // function for handle form (see form onSubmit below return) //always with a form, prevent the page from reloading first
  function handleFormSubmit(event) {
    event.preventDefault();

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
  }

    setStudents([newStudent, ...students]) // will add the newStudents to the students arr

    setFullName("")
    setImage("")
    setPhone("")
    setEmail("")
    setProgram("")
    setGraduationYear("2023")
    setGraduated(false)


  }

  

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(event)=> setFullName(event.target.value)}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(event) => setImage(event.target.value)} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(event) => setPhone(event.target.value)}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={(event) => setProgram(event.target.value)}>
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
            <input name="graduated" type="checkbox" checked={graduated} onChange={(event) => setGraduated(event.target.checked)} />
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
