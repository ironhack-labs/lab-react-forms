import { useState } from "react";
import AddStudent from "./components/AddStudent"; // Corrected path

function App() {
  // State for students array
  const [students, setStudents] = useState([]);

  // Function to handle adding a new student
  const handleAddStudent = (student) => {
    setStudents((prevStudents) => [...prevStudents, student]);
  };

  return (
    <div className="App" style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Cohort Tools</h1>

      {/* AddStudent form component */}
      <AddStudent handleAddStudent={handleAddStudent} />

      {/* Student list */}
      <h2>Students</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <img
              src={student.image}
              alt={student.fullName}
              width={50}
              style={{ marginRight: "10px" }}
            />
            <strong>{student.fullName}</strong> - {student.program} -{" "}
            {student.graduationYear} - {student.graduated ? "Graduated" : "Not Graduated"} -{" "}
            {student.email} - {student.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
