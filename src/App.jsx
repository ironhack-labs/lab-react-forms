import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [studentsForm, setstudentsForm] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "None",
    graduationYear: false
  })

  function handleSubmit(event) {
    event.preventDefault();
    setStudents([
      ...students,
      { ...studentsForm }
    ]);
  }


  function handleChange(event) {
    setstudentsForm({
      ...studentsForm,
      [event.target.name]:
        event.target.type === "checkbox"
          ? event.target.checked
          : event.target.value
    });
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form method="post" onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange}
            value={studentsForm.fullName} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleChange}
            value={studentsForm.image}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleChange}
            value={studentsForm.email}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleChange} value={studentsForm.program}>
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
              onChange={handleChange} value={studentsForm.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" />
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
