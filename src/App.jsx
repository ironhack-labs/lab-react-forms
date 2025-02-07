import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json"; 

function App() {
  // State variables for form inputs
  const [students, setStudents] = useState(studentsData); 
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState(""); // Default empty
  const [graduationYear, setGraduationYear] = useState(2023); // Default min value
  const [graduated, setGraduated] = useState(false); // Default false

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create new student object
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    // Add new student to the list
    setStudents((prevStudents) => [...prevStudents, newStudent]);

    // Reset form
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
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
              placeholder="Full Name"
              value={fullName} // Linking input to state variable
              onChange={(e) => setFullName(e.target.value)} // Handling input change
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image} // Linking input to state variable
              onChange={(e) => setImage(e.target.value)} // Handling input change
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone} // Linking input to state variable
              onChange={(e) => setPhone(e.target.value)} // Handling input change
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email} // Linking input to state variable
              onChange={(e) => setEmail(e.target.value)} // Handling input change
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program} // Linking input to state variable
              onChange={(e) => setProgram(e.target.value)} // Handling input change
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
              min={2023}
              max={2030}
              value={graduationYear} // Linking input to state variable
              onChange={(e) => setGraduationYear(Number(e.target.value))} // Handling input change
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated} // Linking checkbox to state variable
              onChange={() => setGraduated(!graduated)} // Toggle the graduated state
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
