import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setfullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setgraduationYear] = useState(0)

  const [graduated, setIsGraduated] = useState(false)
  const handleSubmit = event => {
    event.preventDefault()
    // Create a new student object
    const newStudent = {
      fullName,
      email,
      image,
      phone,
      program,
      graduationYear: parseInt(graduationYear, 10), // Ensure it's a number
      graduated,
    };
        // Add the new student to the students array
    setStudents((prevStudents) => [...prevStudents, newStudent]);
    // Clear the form inputs
    setFullName('');
    setImage('');
    setPhone('');
    setEmail('');
    setProgram('');
    setGraduationYear('');
    setIsGraduated(false);
   // console.log({ email, password, isChecked })
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
            <input 
              name="fullName" 
              type="text" 
              value={fullName}
              placeholder="Full Name" 
              onChange={event => setfullName(event.target.value)}
            />
          </label>

          <label>
            Profile Image
            <input 
              name="image" 
              type="url"
              value={image} 
              placeholder="Profile Image" 
              onChange={event => setImage(event.target.value)}
              />
          </label>

          <label>
            Phone
            <input 
              name="phone" 
              type="tel" 
              value={phone} 
              onChange={event => setPhone(event.target.value)}
              placeholder="Phone" 
            />
          </label>

          <label>
            Email
            <input 
              name="email" 
              type="email" 
              value={email} 
              onChange={event => setEmail(event.target.value)}
              placeholder="Email" 
              />
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
              name="program"
              value={program}
              onChange={event => setProgram(event.target.value)}
            >
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
              onChange={event => setgraduationYear(event.target.value)}

            />
          </label>

          <label>
            Graduated
            <input 
              name="graduated" 
              type="checkbox" 
              checked={graduated}
              onChange={event => setIsGraduated(event.target.checked)}

            />
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
