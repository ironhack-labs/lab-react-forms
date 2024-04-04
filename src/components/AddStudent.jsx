import './App.css';
import { useState } from 'react';
import TableHeader from './TableHeader';
import StudentCard from './StudentCard';
import Navbar from './Navbar';
import AddStudent from './AddStudent';  
import studentsData from './assets/students.json';
import { useState} from 'react';

const AddStudent = ({ handleAddStudent }) => {

    const handleStudent = (event) => {
        event.preventDefault();
        handleAddStudent({
            ...FormData,
        });
        
    };
    
    const [FormData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        program: '',
        image: '',
        graduationYear: '',
        graduated: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };        
    }
    
function App() {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className='App pt-20'>
      <Navbar />
      <AddStudent handleAddStudent={handleAddStudent} />
      <TableHeader />
      {/* Assuming StudentCard for each existing students */}
      <div className='student-card-container'>
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
        ))}
      </div>
    </div>
  );
}

export default App;
