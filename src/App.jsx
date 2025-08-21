import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

// Define the initial student structure once
const initialStudentState = {
  fullName: "",
  email: "",
  phone: "",
  program: "",
  image: "",
  graduationYear: "",
  graduated: false,
};

function App() {
  const [students, setStudents] = useState(studentsData);
  const [newStudent, setNewStudent] = useState(initialStudentState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewStudent((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents((prev) => [...prev, newStudent]);
  
    // Reset form after submission
    setNewStudent(initialStudentState);
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
            <input name="fullName" type="text" placeholder="Full Name" 
            onChange={handleChange} value={newStudent.fullName}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" 
            onChange={handleChange} value={newStudent.image}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" 
            onChange={handleChange} value={newStudent.phone}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" 
            onChange={handleChange} value={newStudent.email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleChange} value={newStudent.program}>
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
              onChange={handleChange} value={newStudent.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" 
            onChange={handleChange} value={newStudent.graduated}/>
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
