import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  return (
    <div className="App pt-20">
      <Navbar />

      {/* TABLE/LIST HEADER */}
      <TableHeader />
      <AddStudent setStudents={setStudents} students={students} />
      {students &&
        students.map((student, index) => {
          return <StudentCard key={index} {...student} />;
        })}
    </div>
  );
}

export default App;
