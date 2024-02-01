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

  const handleSubmit = () => {
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
              value={form.fullName}
              name="fullName"
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={(e) => handleChange(e)}
              value={form.image}
              name="image"
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              onChange={(e) => handleChange(e)}
              value={form.phone}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              onChange={(e) => handleChange(e)}
              value={form.email}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              onChange={(e) => handleChange(e)}
              value={form.program}
              name="program"
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
              value={form.graduationYear}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              onChange={(e) => handleChange(e)}
              value={form.graduated}
              name="graduated"
              type="checkbox"
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
