import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const initialValue = {
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 0,
    graduated: false,
  };
  const [newStudent, setNewStudent] = useState(initialValue);

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setNewStudent({
      ...newStudent,
      [inputName]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([newStudent, ...students]);
    setNewStudent(initialValue);
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
              value={newStudent.fullName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={newStudent.image}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={newStudent.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={newStudent.program}
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
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={newStudent.graduationYear}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              value={newStudent.graduated}
              onChange={handleInputChange}
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
