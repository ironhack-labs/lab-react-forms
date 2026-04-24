import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
 
  // create states for all input values 
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("All");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);
  
 // adding all handling function to handle the change in the event 
  const handleFullNameChange = (event)=> {
    setFullName(event.target.value)
  }
   const handleImageChange = (event)=> {
    setImage(event.target.value)
  }
   const handlePhoneChange = (event)=> {
    setPhone(event.target.value)
  }
   const handleEmailChange = (event)=> {
    setEmail(event.target.value)
  }
   const handleProgramChange = (event)=> {
    setProgram(event.target.value)
  }
   const handleGraduationYearChange = (event)=> {
    setGraduationYear(event.target.value)
  }
   const handleGraduatedChange = (event)=> {
    setGraduated(event.target.checked)
  }


  const handleFormSubmit = (event)=> {
  event.preventDefault();

   // create object with all info values that added in the state & input
  const newStudent ={
   fullName : fullName,
   image:image,
   phone:phone,
   email:email,
   program:program,
   graduationYear:graduationYear,
   graduated:graduated

  }

  // addding the new student in the cloned array from the original student array 
  const clone = structuredClone(students)
  clone.push(newStudent)
  setStudents(clone)
  
  // clean the input after submit 
  setFullName("")
   setImage("")
   setPhone(0)
   setEmail("")
   setProgram("All")
   setGraduationYear(2003)
   setGraduated(false)
  
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleFullNameChange} value = {fullName} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={handleImageChange} value = {image} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={handlePhoneChange} value = {phone} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={handleEmailChange} value = {email} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={handleProgramChange} value = {program} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input 
            onChange={handleGraduationYearChange}
              value = {graduationYear}
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
            <input onChange={handleGraduatedChange} checked = {graduated} name="graduated" type="checkbox" />
          </label>

          <button onClick={handleFormSubmit} type="submit">Add Student</button>
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
