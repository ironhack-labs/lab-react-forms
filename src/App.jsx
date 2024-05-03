import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // States para los inputs
  const [fullNameValue, setFullNameValue] = useState("");
  const [profileImgValue, setProfileImgValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [programValue, setProgramValue] = useState("");
  const [gradYearValue, setGradYearValue] = useState(2023);
  const [isGraduated, setIsGraduated] = useState(false);

  // Events onChange
  const handleFullNameChange = (event) => {
    //console.log("cogiendo input fullname");
    setFullNameValue(event.target.value);
  };

  const handleProfileImgChange = (event) => {
    setProfileImgValue(event.target.value);
  };

  const handlePhoneValueChange = (event) => {
    setPhoneValue(event.target.value);
  };

  const handleEmailValueChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleProgramValueChange = (event) => {
    setProgramValue(event.target.value);
  };

  const handleGradYearValueChange = (event) => {
    setGradYearValue(event.target.value);
  };

  const handleIsGraduatedValue = (event) => {
    //console.log(event);
    setIsGraduated(!isGraduated);
  };

  const handleSubmit = (event) => {
    event.preventDefault()

    // 1. recopilamos la info del form
    const newStudent = {
      fullName: fullNameValue,
      email: emailValue,
      phone: phoneValue,
      program: programValue,
      image: profileImgValue,
      graduationYear: gradYearValue,
      graduated: isGraduated
    }
    //console.log(newStudent);

    // 2. pasamos esta info para añadirla a la lista de students
    setStudents( [...students, newStudent] )

    // 3. cuando se envían se borran las entradas del formulario
    setFullNameValue("")
    setProfileImgValue("")
    setPhoneValue("")
    setEmailValue("") 
    setProgramValue("")
    setGradYearValue(2023)
    setIsGraduated(false)
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
              value={fullNameValue}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={profileImgValue}
              onChange={handleProfileImgChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phoneValue}
              onChange={handlePhoneValueChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={emailValue}
              onChange={handleEmailValueChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={programValue}
              onChange={handleProgramValueChange}
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
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={gradYearValue}
              onChange={handleGradYearValueChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={isGraduated}
              onChange={handleIsGraduatedValue}
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
