import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import FormStudent from "./components/FormStudent";
import StudentList from "./components/StudentList";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData || []);

  return (
    <div className="App">
      <Navbar />

      {/* Añadir padding top para que el navbar no tape contenido */}
      <div className="pt-24 px-4">

        {/* Formulario para agregar estudiante */}
        <FormStudent students={students} setStudents={setStudents} />

        {/* Tabla/Encabezado */}
        <TableHeader />

        {/* Lista de estudiantes */}
        <StudentList students={students} />

      </div>
    </div>
  );
}

export default App;
