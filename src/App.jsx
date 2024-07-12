import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleChange = (e, setState) => {
    setState(e.target.value);
  };

  const resetStudent = () => {
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear("");
    setGraduated(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStudents([
      ...students,
      { fullName, image, phone, email, program, graduationYear, graduated },
    ]);
    resetStudent();
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudent
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        fullName={fullName}
        setFullName={setFullName}
        image={image}
        setImage={setImage}
        phone={phone}
        setPhone={setPhone}
        email={email}
        setEmail={setEmail}
        program={program}
        setProgram={setProgram}
        graduationYear={graduationYear}
        setGraduationYear={setGraduationYear}
        graduated={graduated}
        setGraduated={setGraduated}
      />
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
