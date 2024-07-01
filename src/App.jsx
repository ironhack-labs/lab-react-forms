import React, { useState } from 'react';
import AddStudent from './AddStudent';

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <AddStudent addStudent={addStudent} />
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student.name} - {student.email} - {student.age}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;