import "./App.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import uuid to generate unique IDs
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

// Helper function to add unique IDs to each student if they don't already have one
const initializeStudentsData = (students) => {
  return students.map((student) => {
    return { ...student, id: student.id ? student.id : uuidv4() };
  });
};

function App() {
  // Retrieve initial students from local storage if available
  const getInitialStudents = () => {
    const savedStudents = localStorage.getItem("students");
    if (savedStudents) {
      return JSON.parse(savedStudents);
    } else {
      return initializeStudentsData(studentsData);
    }
  };

  // Initialize students state with unique IDs for each student or from local storage
  const [students, setStudents] = useState(getInitialStudents);

  // Save students to local storage whenever the `students` state changes
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);

  // Form state for each input field
  const [fullName, setFullName] = useState(""); // Full Name input state
  const [image, setImage] = useState(""); // Profile Image URL input state
  const [phone, setPhone] = useState(""); // Phone number input state
  const [email, setEmail] = useState(""); // Email input state
  const [program, setProgram] = useState("-- None --"); // Program select input state
  const [graduationYear, setGraduationYear] = useState(2023); // Graduation year input state
  const [graduated, setGraduated] = useState(false); // Checkbox input state

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submission

    // Input validation (basic validation to prevent empty fields)
    if (!fullName || !image || !phone || !email || program === "-- None --") {
      alert("Please fill in all required fields before submitting the form.");
      return;
    }

    // Create a new student object from the form fields, including a unique ID
    const newStudent = {
      id: uuidv4(), // Generate a unique ID using uuid
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    // Add the new student to the students list using setStudents
    setStudents([...students, newStudent]);

    // Clear the form fields after submission
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
    setGraduationYear(2023);
    setGraduated(false);
  };

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
              placeholder="Full Name"
              value={fullName} // Link the input value to state
              onChange={(e) => setFullName(e.target.value)} // Update state on input change
              required
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image} // Link the input value to state
              onChange={(e) => setImage(e.target.value)} // Update state on input change
              required
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone} // Link the input value to state
              onChange={(e) => setPhone(e.target.value)} // Update state on input change
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email} // Link the input value to state
              onChange={(e) => setEmail(e.target.value)} // Update state on input change
              required
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program} // Link the select value to state
              onChange={(e) => setProgram(e.target.value)} // Update state on select change
              required
            >
              <option value="-- None --">-- None --</option>
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
              value={graduationYear} // Link the input value to state
              onChange={(e) => setGraduationYear(e.target.value)} // Update state on input change
              min={2023} // Minimum graduation year
              max={2030} // Maximum graduation year
              required
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated} // Link the checkbox checked attribute to state
              onChange={(e) => setGraduated(e.target.checked)} // Update state on checkbox change
            />
          </label>

          <button type="submit">Add Student</button> {/* Calls handleSubmit when clicked */}
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return (
            <StudentCard
              key={student.id} // Use the unique ID as the key
              {...student} // Pass all student data as props to StudentCard
            />
          );
        })}
    </div>
  );
}

export default App;
