import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar';
import TableHeader from './components/TableHeader';
import StudentCard from './components/StudentCard';

import studentsData from './assets/students.json';
import AddStudent from './AddStudent';

function App() {
    const [students, setStudents] = useState(studentsData);
    const handleAddStudent=(newSudent)=>{
      setStudents([...students,newSudent])
    }
  
     return (
    <div className="App pt-20">
      <Navbar />

      <AddStudent handleAddStudent={handleAddStudent} />

      <TableHeader />

      {students.map((student) => (
        <StudentCard key={student.id} {...student} />
        
      ))}
    </div>
  );
}
export default App;
