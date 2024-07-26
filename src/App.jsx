import "./App.css";
import studentsData from "./assets/students.json";
import StudentCard from "./components/StudentCard";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import { useState } from "react";



import AddStudent from "./components/AddStuden";

function App() {

  const [students, setStudents] = useState(studentsData);

  const handleAddStuden = (props) => {
    setStudents(props)
  }

  return (
    <div className="App pt-20">
      <Navbar />
      {/* TABLE/LIST HEADER */}
      <TableHeader />
      <AddStudent handleAddStuden={handleAddStuden} students={students} />
      {/* STUDENT LIST */}
      {students &&
        students.map((student, idx) => {
          return <StudentCard key={idx} {...student} />;
        })}
    </div>
  );
}

export default App;
