import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState(false);

  const handleNewStudent = (event) => {
    event.preventDefault()

    console.log(students)

    const newStudent = {
      fullName: name,
      email: email,
      phone: phone,
      program: program,
      image: img,
      graduationYear: graduationYear,
      graduated: graduated
    }

    const AllStudentsPlusOne = [...students]
    AllStudentsPlusOne.unshift(newStudent)
    setStudents(AllStudentsPlusOne)
    console.log(students)
  }

  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent
      name={name}
      img={img}
      phone={phone}
      email={email}
      program={program}
      graduationYear={graduationYear}
      graduated={graduated}
      setName={setName}
      setImg={setImg}
      setPhone={setPhone}
      setEmail={setEmail}
      setProgram={setProgram}
      setGraduationYear={setGraduationYear}
      setGraduated={setGraduated}
      handleNewStudent={handleNewStudent} />
      
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
