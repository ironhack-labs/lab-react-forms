import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
  // 1. Mantemos o estado com a lista de estudantes
  const [students, setStudents] = useState(studentsData);
  
  // Estados do formulário (corrigido o typo do ano)
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleFullnameInput = (e) => setFullname(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleProgramInput = (e) => setProgram(e.target.value);
  const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
  const handleGraduatedInput = (e) => setGraduated(e.target.checked);

  const handleSubmit = (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    // Criar o novo objeto estudante (com as chaves corretas que o StudentCard espera)
    const newStudent = {
      fullName: fullname, // Ajusta se o teu JSON usar 'fullName' ou 'fullname'
      image,
      phone,
      email,
      program,
      graduationYear: Number(graduationYear), // Garante que é um número
      graduated
    };

    // 2. CORREÇÃO: Atualizar o estado 'students' adicionando o novo item à lista existente
    setStudents([newStudent, ...students]);

    // Limpar o formulário
    setEmail("");
    setFullname("");
    setImage("");
    setPhone("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* CORREÇÃO: onSubmit adicionado ao FORM e não ao botão */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" value={fullname} placeholder="Full Name" onChange={handleFullnameInput}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" value={image} placeholder="Profile Image" onChange={handleImageInput}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" value={phone} placeholder="Phone" onChange={handlePhoneInput}/>
          </label>

          <label>
            Email
            <input name="email" type="email" value={email} placeholder="Email" onChange={handleEmailInput}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramInput} value={program}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              value={graduationYear}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYearInput}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleGraduatedInput} checked={graduated}/>
          </label>

          {/* CORREÇÃO: Botão apenas submete, sem o atributo onSubmit aqui */}
          <button type="submit">Add Student</button>
        </div>
      </form>

      <TableHeader />

      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;