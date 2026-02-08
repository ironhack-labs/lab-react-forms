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
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [graduated, setGraduated] = useState(false);
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);

  /* ====== EXAMPLE with multiple handlers ======

  const handleTitleInput = (e) => setTitle(e.target.value);
  const handleDirectorInput = (e) => setDirector(e.target.value);
  const handleRatingInput = (e) => setIMDBRating(e.target.value);
  const handleOscarsInput = (e) => setHasOscars(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { title, director, IMDBRating, hasOscars };
    
    console.log("Submitted", newMovie);
    props.addMovie(newMovie);

    // Reset the state
    setTitle("");
    setDirector("");
    setIMDBRating(5);
    setHasOscars(true);
  }

*/

// SUBMIT happens here

  const handleSubmit = (e) => {
  e.preventDefault();  // Stops browser from refreshing page

  const newStudent = {
    fullName,
    image,
    phone,
    email,
    program,
    graduationYear,
    graduated,
  };

  setStudents([...students, newStudent]);
};


// Input capture happens here

const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    setGraduated(checked);
    return;
  }



  if (name === "fullName") {
    setFullName(value);
  } else if (name === "image") {
    setImage(value);
  } else if (name === "phone") {
    setPhone(value);
  } else if (name === "email") {
    setEmail(value);
  } else if (name === "program") {
    setProgram(value);
  } else if (name === "graduationYear") {
    setGraduationYear(Number(value));
  }
};


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleChange}>
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
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleChange} />
          </label>

          <button type="submit" >Add Student</button>
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
