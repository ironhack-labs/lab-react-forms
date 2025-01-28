// App.jsx
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  // Form state variables
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  // Handle form submission
  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

    // Reset the form after submission
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent handleAddStudent={handleAddStudent} />
      <TableHeader />
      {students.map((student) => (
        <StudentCard key={student.email} {...student} />
      ))}
    </div>
  );
}

export default App;
