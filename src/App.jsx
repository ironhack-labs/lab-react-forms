import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {

  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [selectedProgram, setSelectedProgram] = useState('');
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const handleFullName = (event) => {
    let inputValue = event.target.value;
    setFullName(inputValue);
  };

  const handleImage = (event) => {
    let inputValue = event.target.value;
    setImage(inputValue);
  };

  const handlePhone = (event) => {
    let inputValue = event.target.value;
    setPhone(inputValue);
  };

  const handleEmail = (event) => {
    let inputValue = event.target.value;
    setEmail(inputValue);
  };

  const handleSelectProgram = (event) => {
    const selectedValue = event.target.value;
    setSelectedProgram(selectedValue);

  }

  const handleGraduationYear = (event) => {
    let inputValue = event.target.value;
    setGraduationYear(inputValue);
  };

  const handleGraduatedChange = (event) => {
    setGraduated(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addStudent = () => {
    const nuevoStudent = {
      fullName: fullName,
      image: image,
      phone: phone,
      email: email,
      graduationYear: graduationYear,
      program: selectedProgram,
      graduated: graduated,
    };

  setStudents((students) => {
    let clone = [...students];
    clone.push(nuevoStudent);
    return clone;
  });
  setFullName("");
  setImage("");
  setPhone(0);
  setEmail("");
  setSelectedProgram("");
  setGraduationYear(0);
  setGraduated(false);
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
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleFullName}
              value={fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleImage}
              value={image}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handlePhone}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleEmail}
              value={email}
            />
          </label>
        </div>
        <div>
          <label>
            Program
            <select name="program" onChange={handleSelectProgram} value={selectedProgram}>
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
              type="text"
              placeholder="Graduation Year"
              pattern="\d{4}"
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYear}
              value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduatedChange} value={graduated} />
          </label>

          <button type="button" onClick={addStudent}>Add Student</button>
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


export default App
