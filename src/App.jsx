import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "Web Dev",
    graduationYear: 2023,
    graduated: false,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      ...formData,
      graduationYear: Number(formData.graduationYear),
    };

    setStudents((prevStudents) => [...prevStudents, newStudent]);

    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "Web Dev",
      graduationYear: 2023,
      graduated: false,
    });
  };

  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <TableHeader />

      {students &&
        students.map((student) => (
          <StudentCard key={student.email} {...student} />
        ))}
    </div>
  );
}

export default App;
