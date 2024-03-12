import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

const handleCreate = (event) => {
  event.preventDefault();
};
function App() {
  const [students, setStudents] = useState(studentsData);

  
  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
     
      <form>
        <span>Add a Student</span>
       
        <div>
          
          <label>
            Full Name
            <input 
            name="fullName"
             type="text"
              placeholder="Full Name"
              value={text}
              onChange={(event) => {
              setText(event.target.value);
            }}
            required  
              />
          </label>

          <label>
            Profile Image
            <input 
            name="image" 
            type="url" 
            placeholder="Profile Image"
            value={url}
            onChange={(event) => {
            setUrl(event.target.value);
            }}
            required 
            />
          </label>

          <label>
            Phone
            <input 
            name="phone" 
            type="tel"
             placeholder="Phone"
            value={tel}
            onChange={(event) => {
            setPhone(event.target.value);
            }} 
            required 
             />
          </label>

          <label>
            Email
            <input 
            name="email"
             type="email" 
             placeholder="Email"
             value={email}
             onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
             />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
            value={email}
             onChange={(event) => {
              setProgram(event.target.value);
            }}
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
              onChange={(event) => {
              setGraduationYear(event.target.value);
            }}
            required
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={(event) => {
                setGraduated(event.target.checked);
              }}
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
