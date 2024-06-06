import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);
  const [displayForm, setDisplayForm] = useState(false);

  function handleFormSubmit(event) {
    event.preventDefault();
    setDisplayForm(false);
    const oneStudent = {
      fullName: name,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };
    const clone = [...students];
    clone.push(oneStudent);
    setStudents(clone);
  }
  function handleName(event) {
    setName(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }

  function handlePhone(event) {
    setPhone(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleGraduationYear(event) {
    setGraduationYear(event.target.value);
  }
  function handleProgram(event) {
    setProgram(event.target.value);
  }
  function handleGraduated(event) {
    setGraduated(!graduated);
  }
  //setEmail("test");
  return (
    <>
      <div className="App pt-20">
        <Navbar />

        {/* FORM */}
        <form onSubmit={handleFormSubmit}>
          <span>Add a Student</span>
          <div>
            <label>
              Full Name
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                onChange={handleName}
              />
            </label>

            <label>
              Profile Image
              <input
                name="image"
                type="url"
                placeholder="Profile Image"
                onChange={handleImage}
              />
            </label>

            <label>
              Phone
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                onChange={handlePhone}
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleEmail}
              />
            </label>
          </div>

          <div>
            <label>
              Program
              <select name="program" onChange={handleProgram}>
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
                onChange={handleGraduationYear}
              />
            </label>

            <label>
              Graduated
              <input
                name="graduated"
                type="checkbox"
                onChange={handleGraduated}
              />
            </label>

            <button type="submit" onClick={() => setDisplayForm(!displayForm)}>
              Display form
            </button>
          </div>
        </form>
      </div>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </>
  );
}

export default App;
