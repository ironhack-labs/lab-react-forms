import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // Iteration 1 & 5: Create a state object for all form inputs
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "Web Dev",
    graduationYear: 2023,
    graduated: false
  });

  // Iteration 5: Universal handler to update state based on input 'name'
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      // If it's a checkbox, use 'checked', otherwise use 'value'
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Iteration 3: Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Add the new student object to the students state array
    setStudents([...students, formData]);

    // Clear form inputs after submission
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "Web Dev",
      graduationYear: 2023,
      graduated: false
    });
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM START */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={formData.image} onChange={handleChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={formData.program} onChange={handleChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data Analytics">Data Analytics</option>
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
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={formData.graduated} onChange={handleChange} />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      <TableHeader />

      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;