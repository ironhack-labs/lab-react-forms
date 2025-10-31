import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)


  const handleChange = (e) => {

    console.log(e.target.value, e.target.checked)

    const { name, value, checked } = e.target

    name === "graduated"
      ? setGraduated(checked)
      : name === "fullName"
        ? setFullName(value)
        : name === "image"
          ? setImage(value)
          : name === "phone"
            ? setPhone(value)
            : name === "email"
              ? setEmail(value)
              : name === "program"
                ? setProgram(value)
                : name === "graduationYear"
                  ? setGraduationYear(value) :
                  null

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    }

    const clone = structuredClone(students)

    clone.push(newStudent)

    setStudents(clone)

    setGraduated(false)
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleChange} />
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
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleChange}
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
