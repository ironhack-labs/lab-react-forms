import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [form, setForm] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([...students, form]);
    setForm({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
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
              onChange={(e) => handleChange(e)}
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={form.fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={(e) => handleChange(e)}
              name="image"
              type="url"
              placeholder="Profile Image"
              value={form.image}
            />
          </label>

          <label>
            Phone
            <input
              onChange={(e) => handleChange(e)}
              name="phone"
              type="tel"
              placeholder="Phone"
              value={form.phone}
            />
          </label>

          <label>
            Email
            <input
              onChange={(e) => handleChange(e)}
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              onChange={(e) => handleChange(e)}
              name="program"
              value={form.program}
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
              onChange={(e) => handleChange(e)}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={form.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              onChange={(e) => handleChange(e)}
              name="graduated"
              type="checkbox"
              checked={form.graduated}
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
