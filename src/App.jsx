import "./App.css";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import AddStudent from "./components/AddStudent";
import studentsData from "./assets/students.json";
import { useState } from "react";

function App() {
  const [students, setStudents] = useState(studentsData);

  function handleAddStudent(student) {
    setStudents((prevStudents) => [student, ...prevStudents]);
  }

  return (
    <>
      <AddStudent handleAddStudent={handleAddStudent} />
      <TableHeader />

      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </>
  );
}

export default App;
