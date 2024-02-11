import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState([]);
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [graduationYear, setGraduationYear] = useState('');
  const [graduated, setGraduated] = useState(false);

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
  name="fullName"
  value={fullName}
  onChange={(e) => setFullName(e.target.value)}

  placeholder="Full Name"
/>
<input
  type="url"
  name="image"
  value={image}
  onChange={(e) => setImage(e.target.value)}
  placeholder="Image URL"
        />
<input
  type="tel"
  name="phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  placeholder="Phone"
        />
<input
  type="email"
  name="email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  placeholder="Email"
/>

{/* selecting program */}
<select
          name="program"
          value={program}
          onChange={(e) => setProgram(e.target.value)}
        >
          <option value="">Select Program</option>
          <option value="Bootcamp">Bootcamp</option>
          <option value="Workshop">Workshop</option>
          <option value="Course">Course</option>
        </select>


  <input
          type="number"
          name="graduationYear"
          value={graduationYear}
          onChange={(e) => setGraduationYear(e.target.value)}
          placeholder="Graduation Year"
          min="2023"
          max="2030"
        />
   <input
          type="checkbox"
          name="graduated"
          checked={graduated}
          onChange={(e) => setGraduated(e.target.checked)}
        />
<label htmlFor="graduated">Graduated?</label>
<button type="submit">Add Student</button>

</form>
      {/* FORM END */}

 {/* TABLE/LIST HEADER */}
 <TableHeader />

    


 {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />
        })}
    </div>
  );
}

export default App;
