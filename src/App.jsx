import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [newStudent, setNewStudent] = useState({ //new form state
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: "",
    graduated: false,
  });

  //state variables
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("2023");
  const [graduated, setGraduated] = useState("false");

   function handleChange(event) {  //will run every time the user types or clicks in the form
    const { name, value, type, checked } = event.target; //event.target is the input element 
    setNewStudent((prev) => ({ //this updates the newStudent  obj
      ...prev, //copies all the previous field values into the new obj - spread operator
      [name]: type === "checkbox" ? checked : value, //if its a checkbox update the field
    })
    );
   } 

   function handleSubmit(event) {
    event.preventDefault(); //stops the browser from doing the default form action (reloading the page)
    setStudents((prev) => [newStudent, ...prev]); //updating the student list, prev is the current std array, put the new student first then keep the old ones after
    setNewStudent({ //after  adding the student, reset the form
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: "",
      graduated: false,
    });
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
            placeholder="Profile Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Profile Image
            <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
          </label>
          <label>
            Phone
            <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <label>
           Email
            <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
           Program
            <input
            name="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
            />
          </label>

          <label>
           Graduatin Year
            <input
            name="graduationYear"
            type="number"
            placeholder="Profile Graduation Year"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
            />
          </label>
          <label>
            Graduated
            <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={(e) => setGraduated(e.target.value)}
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
