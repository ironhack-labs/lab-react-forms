import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "../src/assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  // const [fullName, setFullName] = useState("");
  // const [image, setImage] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [program, setProgram] = useState("-- None --");
  // const [graduationYear, setGraduationYear] = useState(2023);
  // const [graduated, setGraduated] = useState(2023);

  // const handleFullNameInput = (e) => {
  //   setFullName(e.target.value);
  // };

  // const handleImageInput = (e) => setImage(e.target.value);

  // const handlePhoneInput = (e) => setPhone(e.target.value);

  // const handleEmailInput = (e) => setEmail(e.target.value);
  // const handleProgramInput = (e) => {
  //   console.log(e.target.value);
  //   setProgram(e.target.checked);
  // };
  // const handleGraduationYear = (e) => {
  //   console.log(e.target.value);
  //   setGraduationYear(e.target.value);
  // };
  // const handleGraduated = (e) => {
  //   console.log(e.target.checked);
  //   setGraduated(e.target.checked);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const student = {
  //     fullName,
  //     image,
  //     phone,
  //     email,
  //     program,
  //     graduationYear,
  //     graduated,
  //   };

  //   console.log("Submitted", students);
  //   setStudents([...students, student]);

  //   // Reset the state
  //   setFullName("");
  //   setImage("");
  //   setPhone("");
  //   setEmail("");
  //   setProgram("-- None --");
  //   setGraduationYear(2023);
  //   setGraduated(2023);
  // };

  const getStudent = (data) => {
    console.log("added student:", data);

    setStudents((prevState) => [...prevState, data]);
  };

  console.log("students:", students);

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent setStudents={getStudent} />
      {/* FORM */}
      {/* <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameInput} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImageInput} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneInput} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailInput} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramInput}>
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
              onChange={handleGraduationYear}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={graduated} onChange={handleGraduated} />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form> */}
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
