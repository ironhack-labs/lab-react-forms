import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [nombreCompletoEstudiantes, setNombreCompletoEstudiantes] =
    useState("");
  const [imagenEstudiante, setImagenEstudiante] = useState("");
  const [telefonoEstudiante, setTelefonoEstudiante] = useState("");
  const [emailEstudiante, setEmailEstudiante] = useState("");
  const [programaEstudiante, setProgramaEstudiante] = useState("");
  const [ageGraduacionEstudiante, setAgeGraduacionEstudiante] = useState(2023);
  const [estudianteGraduado, setEstudianteGraduado] = useState(false);

  const introducirNombreEstudiante = (evento) => {
    setNombreCompletoEstudiantes(evento.target.value);
  };
  const introducirImagenEstudiante = (evento) => {
    setImagenEstudiante(evento.target.value);
  };
  const introducirTelefonoEstudiante = (evento) => {
    setTelefonoEstudiante(evento.target.value);
  };
  const introducirEmailEstudiante = (evento) => {
    setEmailEstudiante(evento.target.value);
  };
  const introducirProgramaEstudiante = (evento) => {
    setProgramaEstudiante(evento.target.value);
  };
  const introducirAnyoGraduacionEstudiante = (evento) => {
    setAgeGraduacionEstudiante(evento.target.value);
  };
  const introducirEstudianteGraduado = (evento) => {
    setEstudianteGraduado(evento.target.checked);
  };

  // ENVÍO FORMULARIO

  const enviarFormulario = (evento) => {
    evento.preventDefault();
    console.log("Entregando Formulario...");

    const nuevoEstudiante = {
      fullName: nombreCompletoEstudiantes,
      email: emailEstudiante,
      phone: telefonoEstudiante,
      program: programaEstudiante,
      image: imagenEstudiante,
      graduationYear: ageGraduacionEstudiante,
      graduated: estudianteGraduado,
    };

    const clone = [...students];
    clone.push(nuevoEstudiante);
    console.log(clone);
    setStudents(clone);

    setNombreCompletoEstudiantes("");
    setImagenEstudiante("");
    setTelefonoEstudiante("");
    setEmailEstudiante("");
    setProgramaEstudiante("");
    setAgeGraduacionEstudiante(2023);
    setEstudianteGraduado(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={enviarFormulario}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              onChange={introducirNombreEstudiante}
              name="fullName"
              value={nombreCompletoEstudiantes}
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={introducirImagenEstudiante}
              name="image"
              value={imagenEstudiante}
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              onChange={introducirTelefonoEstudiante}
              name="phone"
              value={telefonoEstudiante}
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              onChange={introducirEmailEstudiante}
              name="email"
              value={emailEstudiante}
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              onChange={introducirProgramaEstudiante}
              value={programaEstudiante}
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={introducirAnyoGraduacionEstudiante}
              value={ageGraduacionEstudiante}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              onChange={introducirEstudianteGraduado}
              name="graduated"
              checked={estudianteGraduado}
              type="checkbox"
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
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
