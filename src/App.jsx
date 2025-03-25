import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json"; /*INFORMACIÓN DE TODOS LOS ESTUDIANTES*/

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState(""); /* ESTADOS DE CADA PROPIEDAD DEL OBJETO ESTUDIANTES */
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);
  

  const handleSubmit = (e) => { /* PARA QUE FUNCIONE EL EVENTO */
    e.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated, 
    };
    setStudents([...students, newStudent]);

    /*PARA LIMPIAR EL FORMULARIO */
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}> {/*SIN ESTO NO ENVÍA LA INFORMACIÓN */}
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} /*PARA QUE EL INPUT REFLEJE EL ESTADO*/
              onChange={(e) => setFullName(e.target.value)} /*ACTUALIZA EL ESTADO*//>
          </label>
          
          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} 
              onChange={(e) => setImage(e.target.value)} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} 
              onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} 
              onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} 
              onChange={(e) => setProgram(e.target.value)}>
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
            <input name="graduated" type="checkbox" checked={graduated} /*NO FUNCIONA "VALUE" CON LOS CHECKBOX*/
              onChange={(e) => setGraduated(e.target.checked)}/>
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
