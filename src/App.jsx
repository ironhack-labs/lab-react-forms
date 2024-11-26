import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const initialStudent = {
    fullName: "",
    email: "",
    phone: "",
    program: "",
    image: "",
    graduationYear: 2023,
    graduated: false,
  };

  const [addStudent, setInitialStudent] = useState(initialStudent);

  const onChange = (event) => {
    const { name, value, type, checked } = event.target;
    setInitialStudent({
      ...addStudent,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setStudents([...students, addStudent]); // Añadir nuevo estudiante
    setInitialStudent(initialStudent); // Reiniciar formulario
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={onSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={addStudent.fullName}
              onChange={onChange}
            />
          </label>

          <label>
            Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={addStudent.image}
              onChange={onChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={addStudent.phone}
              onChange={onChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={addStudent.email}
              onChange={onChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={addStudent.program}
              onChange={onChange}
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
              value={addStudent.graduationYear}
              onChange={onChange}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={addStudent.graduated}
              onChange={onChange}
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
