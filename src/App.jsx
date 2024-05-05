import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";


import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [formData, setFormData] = useState({
    fullName: "",
    image:"",
    phone:"",
    email:"",
    program: "",
    gratuationYear: "",
    graduated: {},
  });

  const handleInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormData({...formData, [name]: newValue });
  }

  const handleSubmit = (e) => {
    e.preventDefault();

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
            <input name="fullName" type="text" placeholder="Full Name" input-type="" value={formData.fullName}
              onChange={handleInputChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" input-type="" value={formData.image}
              onChange={handleInputChange}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" input-type="" value={formData.phone}
              onChange={handleInputChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" input-type="" value={formData.email}
              onChange={handleInputChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
            value={formData.program}
              onChange={handleInputChange}
              <option value="" selected>-- None --</option>
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
              value={formData.gratuationYear}
              onChange={handleInputChange}
              value={2024}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" defaultValue={false} value={formData.graduated}
              onChange={handleInputChange} />
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
