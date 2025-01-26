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
  const [program, setProgram] = useState("webdev");
  const [classYear, setClassYear] = useState(""); // Renamed from 'className' to 'classYear'
  const [graduated, setGraduated] = useState(false);

  // Handle changes for form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (name === "graduated") {
        setGraduated(checked);
      }
    } else {
      switch (name) {
        case "fullName":
          setFullName(value);
          break;
        case "image":
          setImage(value);
          break;
        case "phone":
          setPhone(value);
          break;
        case "email":
          setEmail(value);
          break;
        case "program":
          setProgram(value);
          break;
        case "classYear":
          setClassYear(value); // Changed from 'className'
          break;
        default:
          break;
      }
    }
  };

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
      classYear,
      graduated,
    };

    // Add student to the list
    setStudents((prevStudents) => [...prevStudents, newStudent]);

    // Clear form fields after submission
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("webdev");
    setClassYear(""); // Reset the classYear input
    setGraduated(false); // Reset graduation checkbox
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
              value={fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleChange}>
              <option value="webdev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="classYear" // Renamed to 'classYear'
              type="text"
              placeholder="Class Year"
              value={classYear}
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
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
        students.map((student) => (
          <StudentCard key={student.email} {...student} />
        ))}
    </div>
  );
}

export default App;
