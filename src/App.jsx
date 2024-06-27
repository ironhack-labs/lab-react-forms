import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TableHeader from './components/TableHeader';
import StudentCard from './components/StudentCard';
import AddStudent from './components/AddStudent'; // Import the AddStudent component
import studentsData from './assets/students.json';

function App() {
  // Existing students state
  const [students, setStudents] = useState(studentsData);

  // Function to handle adding a new student
  const handleAddStudent = (newStudent) => {
    // Update the students state with the new student
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App pt-20">
      <Navbar />

      {/* Render the AddStudent component and pass handleAddStudent as a prop */}
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
