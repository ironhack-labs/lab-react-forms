import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState([]);
  
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState(''); 
  const [isGraduated, setIsGraduated] = useState(false); 
  const [gpa, setGpa] = useState(0); 

const handleSubmit = (e)=> {
  e.preventDefault();
};


  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
      
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}

          placeholder="First Name"
        />
        <input
          type="text"
          name="lastName"
          value={lastName}


          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
        />
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="tel"
          name="phoneNumber"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}

          placeholder="Phone Number"

        />
        <input
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}

          placeholder="Date of Birth"
        />
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>

          <option value="female">Female</option>
          
          <option value="other">Other</option>
        </select>
        <input
          type="checkbox"
          name="isGraduated"
          checked={isGraduated}
          onChange={(e) => setIsGraduated(e.target.checked)}
        />
        <label htmlFor="isGraduated">Is Graduated?</label>
        <input
          type="number"

          name="gpa"

          value={gpa}
          onChange={(e) => setGpa(parseFloat(e.target.value))}
          placeholder="GPA"
          min="0" 
          max="4.0" 

          step="0.01" 
        />
       
        <button type="submit">Add Student</button>
      </form>
     



      <TableHeader />


      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
