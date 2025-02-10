import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  // État pour la liste des étudiants
  const [students, setStudents] = useState(studentsData);

  // États pour les inputs du formulaire
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  // Fonction de gestion de la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Création du nouvel objet étudiant
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    // Ajout du nouvel étudiant à la liste
    setStudents([...students, newStudent]);

    // Réinitialisation des champs du formulaire
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORMULAIRE */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
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
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={(e) => setGraduationYear(Number(e.target.value))}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduated}
              onChange={(e) => setGraduated(e.target.checked)}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FIN DU FORMULAIRE */}

      {/* ENTÊTE DU TABLEAU */}
      <TableHeader />

      {/* LISTE DES ÉTUDIANTS */}
      {students &&
        students.map((student, index) => (
          <StudentCard key={index} className="" {...student} />
        ))}
    </div>
  );
}

export default App;
