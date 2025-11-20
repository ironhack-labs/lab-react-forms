import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // Iteration 1 | Create state variables
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  });

  // Iteration 2 | Handle input changes
  const handleInputChange = (event) => {
    const { name, type, value, checked } = event.target;
    
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  // Iteration 3 | Handle form submission
  const handleFormSubmit = (event) => {
    event.preventDefault()
    
    // Create new student object
    const newStudent = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      image: formData.image,
      graduationYear: Number(formData.graduationYear),
      graduated: formData.graduated
    };

    // Add new student to students array
    setStudents(prevStudents => [...prevStudents, newStudent]);

    // Reset form
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false
    })
  }


  return (
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
              value={formData.fullName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input 
              name="image" 
              type="url" 
              placeholder="Profile Image" 
              value={formData.image}
              onChange={handleInputChange}
              />
          </label>

          <label>
            Phone
            <input 
              name="phone" 
              type="tel" 
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input 
              name="email" 
              type="email" 
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
              name="program"
              value={formData.program}
              onChange={handleInputChange}
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
              value={formData.graduationYear}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Graduated
            <input 
              name="graduated" 
              type="checkbox"
              checked={formData.graduated}
              onChange={handleInputChange}
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
