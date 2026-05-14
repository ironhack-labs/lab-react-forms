import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: e.target.fullName.value,
      image: e.target.image.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      program: e.target.program.value,
      graduationYear: e.target.graduationYear.value,
      graduated: e.target.graduated.checked,
    };

    setStudents((prev) => [...prev, newStudent]);
    e.target.reset();
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent handleAddStudent={handleAddStudent} />
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