import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('Web Dev');
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

  const newStudent = {
    fullName,
    image,
    phone,
    email,
    program,
    graduationYear,
    graduated,
  };

  setStudents((prevStudents) => [...prevStudents, newStudent]);


  setFullName('');
  setImage('');
  setPhone('');
  setEmail('');
  setProgram('Web Dev');
  setGraduationYear(2023);
  setGraduated(false);
};

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
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
            name="image"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input 
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone"
            />
          </label>

          <label>
            Email
           <input
           name="email"
           type="email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}
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
             onChange={(e) => setProgram(e.target.value)}
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
              value={graduationYear}
              onChange={(e) => setGraduationYear(Number(e.target.value))}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" 
            type="checkbox"
            checked={graduated}
            onChange={(e) => setGraduated(e.target.checked)}
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
