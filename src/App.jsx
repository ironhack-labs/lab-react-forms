import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent"; // Importamos el nuevo componente

function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* Renderizamos el formulario como un componente separado */}
      <AddStudent handleAddStudent={handleAddStudent} />

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
