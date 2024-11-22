import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";

function App() {
  const [students, setStudents] = useState(studentsData);

  //ITERATION 1 (removed during iteration 4)
  /* const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false); */

 /*  function handleSubmit(submit) {
    submit.preventDefault();

    const newStudent = {
      fullName: name,
      email: email,
      phone: tel,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    };

    const studentsCopy = [... students];
    studentsCopy.push(newStudent);

    setStudents(studentsCopy);
  } */
    const handleAddStudent = (student) => {
      const updatedStudents = [... students, student];
      setStudents(updatedStudents);
    }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      {/* content removed during iteration 4 */}
      {/* FORM END */}
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
