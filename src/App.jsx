import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [inputData, setInputData] = useState({});

  // const handleInputChange = (e) => 
  // setInputData((prevData) => ({ ...prevData, [e.target.name]: e.target.value}));

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === 'checkbox' ? checked : value;
    setInputData((prevData) => ({ ...prevData, [name]: inputValue }));
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();

    setStudents([inputData, ...students]);
    setInputData({});
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* STUDENT FORM */}
      <form onSubmit={handleSubmitForm}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input 
            name="fullName" 
            type="text" 
            placeholder="Full Name" 
            onChange ={handleInputChange}
            value={inputData.fullName || ''}
            />
          </label>

          <label>
            Profile Image
            <input 
            name="image" 
            type="url" 
            placeholder="Profile Image" 
            onChange ={handleInputChange}
            value={inputData.image || ''}
            />
          </label>

          <label>
            Phone
            <input 
            name="phone" 
            type="tel" 
            placeholder="Phone"
            onChange ={handleInputChange}
            value={inputData.phone || ''}
             />
          </label>

          <label>
            Email
            <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            onChange ={handleInputChange}
            value={inputData.email || ''}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
            name="program"
            onChange={handleInputChange}
            value={inputData.program || ''}
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
              onChange={handleInputChange}
              value={inputData.graduationYear || ''}
            />
          </label>

          <label>
            Graduated
            <input 
            name="graduated" 
            type="checkbox" 
            onChange={handleInputChange}
            checked={inputData.graduated || false}
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
