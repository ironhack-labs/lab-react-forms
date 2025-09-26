import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <Navbar />

      {/* Add spacing below navbar */}
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        <AddStudent handleAddStudent={handleAddStudent} />

        <TableHeader />

        {students &&
          students.map((student) => (
            <StudentCard key={student.email} {...student} />
          ))}
      </div>
    </div>
  );
}

export default App;
