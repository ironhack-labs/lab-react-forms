import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleChange = (e) => {
    const { name: fieldName, value, type, checked } = e.target;

    if (type === "checkbox") {
      if (fieldName === "graduated") setGraduated(checked);
      return;
    }

    if (fieldName === "name") setName(value);
    if (fieldName === "image") setImage(value);
    if (fieldName === "phone") setPhone(value);
    if (fieldName === "email") setEmail(value);
    if (fieldName === "program") setProgram(value);
    if (fieldName === "graduationYear") setGraduationYear(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      name,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    setStudents((prev) => [...prev, newStudent]);

    // reset form fields
    setName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear("");
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
            <input name="name" type="text" placeholder="Full Name" value={name} onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleChange}>
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
              value={graduationYear}
              onChange={handleChange}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={handleChange} />
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
