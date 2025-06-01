import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";

function App() {
  const [students, setStudents] = useState(studentsData);

  function handleAddStudent(newStudent) {
    setStudents([...students, newStudent]);
  }

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App pt-20">
              <form
                onSubmit={(e) => {
                  e.preventDefault();

                  const newStudent = {
                    fullName: e.target.fullName.value,
                    image: e.target.image.value,
                    phone: e.target.phone.value,
                    email: e.target.email.value,
                    program: e.target.program.value,
                    graduationYear: Number(e.target.graduationYear.value),
                    graduated: e.target.graduated.checked,
                  };

                  handleAddStudent(newStudent);
                  e.target.reset();
                }}
              >
                <span>Add a Student</span>
                <label>
                  Full Name
                  <input name="fullName" type="text" />
                </label>
                <label>
                  Profile Image
                  <input name="image" type="url" />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" />
                </label>
                <label>
                  Program
                  <select name="program">
                    <option value="">-- None --</option>
                    <option value="Web Dev">Web Dev</option>
                    <option value="UXUI">UXUI</option>
                    <option value="Data">Data</option>
                  </select>
                </label>
                <label>
                  Graduation Year
                  <input name="graduationYear" type="number" min={2023} max={2030} />
                </label>
                <label>
                  Graduated
                  <input name="graduated" type="checkbox" />
                </label>
                <button type="submit">Add Student</button>
              </form>

              <TableHeader />
              {students.map((student, index) => (
                <StudentCard key={student.email || index} {...student} />
              ))}
            </div>
          }
        />

        <Route
          path="*"
          element={
            <div className="text-center p-8">
              <h1>Page Not Found</h1>
              <p>This page does not exist.</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
