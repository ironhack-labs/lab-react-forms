import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName , setFullName] = useState(studentsData)
  const [handleImageInput , setHandleImageInput] = useState(studentsData)
  const [handlePhoneInput , setHandlePhoneInput] = useState(studentsData)
  const [handleEmailInput , setHandleEmailInput] = useState(studentsData)

  const handlefullNameInput = (e) => setTitle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = { fullName, email, phone, program , image , graduationYear , graduated };
    console.log("Submitted", newStudent);
    props.addStudent(newStudent);

    // Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
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
            <input name="fullName" value={studentsData.fullName} type="text" placeholder="Full Name" onChange={handlefullNameInput} />
          </label>

          <label>
            Profile Image
            <input name="image" value={studentsData.image} type="url" placeholder="Profile Image" onChange={handleImageInput} />
          </label>

          <label>
            Phone
            <input name="phone" value={studentsData.phone} type="tel" placeholder="Phone" onChange={handlePhoneInput} />
          </label>

          <label>
            Email
            <input name="email" value={studentsData.email} type="email" placeholder="Email" onChange={handleEmailInput} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
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
