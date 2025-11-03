import { useState } from "react";
import "./App.css";

function App() {
  // 1️⃣ Estado con lista de estudiantes
  const [students, setStudents] = useState([
    {
      fullName: "Juan Pérez",
      email: "juan@example.com",
      phone: "666777888",
      program: "Web Development",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      graduationYear: 2024,
      graduated: false,
    },
  ]);

  // 2️⃣ Estados para cada input del formulario
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("Web Development");
  const [image, setImage] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  // 3️⃣ Función para manejar el envío del formulario
  function handleSubmit(event) {
    event.preventDefault(); // evita recargar la página

    // Creamos un nuevo estudiante con los valores actuales
    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    // Agregamos el nuevo estudiante a la lista
    setStudents([...students, newStudent]);

    // Limpiamos el formulario
    setFullName("");
    setEmail("");
    setPhone("");
    setProgram("Web Development");
    setImage("");
    setGraduationYear(2023);
    setGraduated(false);
  }

  return (
    <div className="App">
      <h1>Bootcamp Students</h1>

      {/* FORMULARIO */}
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </label>

        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
          />
        </label>

        <label>
          Program:
          <select
            name="program"
            value={program}
            onChange={(event) => setProgram(event.target.value)}
          >
            <option>Web Development</option>
            <option>UX/UI Design</option>
            <option>Data Analytics</option>
            <option>Cybersecurity</option>
          </select>
        </label>

        <label>
          Image URL:
          <input
            type="url"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
        </label>

        <label>
          Graduation Year:
          <input
            type="number"
            name="graduationYear"
            min="2023"
            max="2030"
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
          />
        </label>

        <label>
          Graduated:
          <input
            type="checkbox"
            name="graduated"
            checked={graduated}
            onChange={(event) => setGraduated(event.target.checked)}
          />
        </label>

        <button type="submit">Add Student</button>
      </form>

      <hr />

      {/* LISTA DE ESTUDIANTES */}
      <h2>Students List</h2>
      <ul className="students-list">
        {students.map((student, index) => (
          <li key={index} className="student-card">
            <img src={student.image} alt={student.fullName} />
            <p><strong>{student.fullName}</strong></p>
            <p>Email: {student.email}</p>
            <p>Phone: {student.phone}</p>
            <p>Program: {student.program}</p>
            <p>Year: {student.graduationYear}</p>
            <p>Graduated: {student.graduated ? "✅ Yes" : "❌ No"}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

