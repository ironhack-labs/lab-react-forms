import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudents from "./components/AddStudents";

function App() {
  const [students, setStudents] = useState(studentsData);
  // const [fullName, setFullName] = useState("");
  // const [image, setImage] = useState("");
  // const [phone, setPhone] = useState("");
  // const [email, setEmail] = useState("");
  // const [program, setProgram] = useState("");
  // const [graduationYear, setGraduationYear] = useState(2023);
  // const [graduated, setGraduated] = useState(false);
  const [value, setValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    image: "",
    graduationYear: 2023,
    graduated: "false",
  });

  // const addStudentObj = {
  //   fullName,
  //   email,
  //   phone,
  //   program,
  //   image,
  //   graduationYear,
  //   graduated,
  // };

  function handleChange(e) {
    const { name, value } = e.target;
    setValue((preValue) => ({ ...preValue, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(value);
    setStudents((preStudents) => [value, ...preStudents]);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <AddStudents
        handleAddStudents={handleSubmit}
        handleChange={handleChange}
        value={value}
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
