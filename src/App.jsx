import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./AddStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  /*const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameInput = (e) => setFullName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleProgramInput = (e) => setProgram(e.target.value);
  const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
  const handleGraduatedInput = (e) => setGraduated(e.target.checked);

  function handleSubmit(e) {
    e.preventDefault();
    const newStudent = {
      fullName,
      email,
      phone, 
      program, 
      image,
      graduationYear,
      graduated,
    };
    setStudents([...students, newStudent])
  }*/

  return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent students={students} setStudents={setStudents} />
      {//Need to pass the data to the child, so pass the variables that are the same in the student list}


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
