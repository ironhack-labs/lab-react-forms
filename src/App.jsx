import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json"; // Datos iniciales de estudiantes

function App() {
  // Estado de la lista de estudiantes
  const [students, setStudents] = useState(studentsData);

  // Objeto inicial para un nuevo estudiante
  const initialStudent = {
    fullName: "",
    email: "",
    phone: "",
    program: "",
    image: "",
    graduationYear: 2023, // Valor predeterminado
    graduated: false,
  };

  // Estado para manejar los datos del formulario
  const [formData, setFormData] = useState(initialStudent);

  // Manejar cambios en los inputs del formulario
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value, // Manejo especial para checkboxes
    });
  };

  // Función para agregar un estudiante nuevo
  const addStudent = (e) => {
    e.preventDefault(); // Evitar el refresco de la página

    // Validar que los campos obligatorios estén llenos
    const { fullName, email, program } = formData;
    if (!fullName || !email || !program) {
      alert("Please fill in all required fields.");
      return;
    }

    // Agregar el nuevo estudiante a la lista
    setStudents([...students, formData]);

    // Limpiar los campos del formulario
    setFormData(initialStudent);
  };

  return (
    <div className="App pt-20">
      {/* Barra de navegación */}
      <Navbar />

      {/* FORMULARIO PARA AGREGAR ESTUDIANTE */}
      <form onSubmit={addStudent}>
        <h2>Add a Student</h2>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image URL"
              value={formData.image}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={formData.program}
              onChange={handleChange}
            >
              <option value="">-- Select Program --</option>
              <option value="Web Dev">Web Development</option>
              <option value="UXUI">UX/UI Design</option>
              <option value="Data">Data Analytics</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              value={formData.graduationYear}
              min={2023}
              max={2030}
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={formData.graduated}
              onChange={handleChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FIN FORMULARIO */}

      {/* ENCABEZADO DE LA TABLA */}
      <TableHeader />

      {/* LISTA DE ESTUDIANTES */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;