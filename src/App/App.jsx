// ! modules
import { useState } from "react";

// ? components
import Navbar from "../components/Navbar";
import TableHeader from "../components/TableHeader";
import StudentCard from "../components/StudentCard";

// ? assets
import studentsData from "../assets/students.json";

// ? styles
import "./App.css";

function App() {
  const [students, setStudents] = useState(studentsData);

  const [inputFormValue, setInputFormValue] = useState({
    "input-full-name": "",
    "input-image": "",
    "input-phone": "",
    "input-email": "",
    "input-program": "",
    "input-graduation-year": 2024,
    "input-graduated": false,
  });

  function handleInput(e) {
    const { id } = e.target;

    if (id === "input-graduated") {
      setInputFormValue((prevState) => ({
        ...prevState,
        [id]: !inputFormValue["input-graduated"],
      }));
    } else {
      setInputFormValue((prevState) => ({
        ...prevState,
        [id]: e.target.value,
      }));
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStudents((prevState) => [
      {
        fullName: inputFormValue["input-full-name"],
        email: inputFormValue["input-email"],
        phone: inputFormValue["input-phone"],
        program: inputFormValue["input-program"],
        image: inputFormValue["input-image"],
        graduationYear: inputFormValue["input-graduation-year"],
        graduated: inputFormValue["input-graduated"],
      },
      ...prevState,
    ]);
  }

  return (
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              onChange={handleInput}
              id="input-full-name"
              value={inputFormValue["input-full-name"]}
              name="fullName"
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={handleInput}
              id="input-image"
              value={inputFormValue["input-image"]}
              name="image"
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              onChange={handleInput}
              id="input-phone"
              value={inputFormValue["input-phone"]}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label>
            Email
            <input
              onChange={handleInput}
              id="input-email"
              value={inputFormValue["input-email"]}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              onChange={handleInput}
              id="input-program"
              value={inputFormValue["input-program"]}
              name="program"
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={handleInput}
              id="input-graduation-year"
              value={inputFormValue["input-graduation-year"]}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2024}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              onChange={handleInput}
              id="input-graduated"
              checked={inputFormValue["input-graduated"]}
              name="graduated"
              type="checkbox"
            />
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
