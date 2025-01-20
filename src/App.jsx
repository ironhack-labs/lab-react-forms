import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [studentInput, setStudentInput] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: "",
    graduated: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentInput({
      ...studentInput,
      [name]: type === "checkbox" ? checked : value,
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    setStudents([...students, studentInput]); // Add new student
    console.log(studentInput);
    setStudentInput({ // Reset form
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: "",
      graduated: false,
    });
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
              value={studentInput.fullName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={studentInput.image}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={studentInput.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={studentInput.email}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={studentInput.program}
              onChange={handleInputChange}
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
              value={studentInput.graduationYear}
              onChange={handleInputChange}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={studentInput.graduated}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>

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
