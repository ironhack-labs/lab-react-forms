import { useState } from "react";

// ITERATAION 4: BONUS - Form Validation en AddStudent.jsx
export default function AddStudent({ handleAddStudent }) {
  
  // Iteration 1: Form State Management
  // Create a state for each form field -> Refactorizado a un solo objeto
  const [student, setStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  });

  // Extra: Iteración 5 | Refactorización - Funciones de controlador
  // Esta función única se encarga de actualizar la variable de estado según el campo que la activó
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setStudent((prevStudent) => ({
      ...prevStudent,
      // Usamos el "name" del input para saber qué propiedad actualizar
      // Si es un checkbox, usamos 'checked'; si no, usamos 'value'
      [name]: type === "checkbox" ? checked : value
    }));
  };

  // Iteration 3: Add a Student - Form Submission Handler
  // Create a new function to handle the form submission.
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // add new student to the students array to begin
    // Enviamos directamente el objeto 'student' que ya tiene toda la info
    handleAddStudent(student);

    // Reset form fields
    setStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false
    });
  };

  // FORM JSX
  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input 
            name="fullName" 
            type="text" 
            value={student.fullName} 
            placeholder="Full Name" 
            onChange={handleChange} 
          />
        </label>

        <label>
          Profile Image
          <input 
            name="image" 
            type="url" 
            value={student.image}
            placeholder="Profile Image" 
            onChange={handleChange} 
          />
        </label>

        <label>
          Phone
          <input 
            name="phone" 
            type="tel" 
            value={student.phone} 
            placeholder="Phone" 
            onChange={handleChange} 
          />
        </label>

        <label>
          Email
          <input 
            name="email" 
            type="email" 
            value={student.email}
            placeholder="Email" 
            onChange={handleChange} 
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select 
            name="program"
            value={student.program}
            onChange={handleChange}
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
            name="graduationYear"
            type="number"
            value={student.graduationYear}
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={handleChange} 
          />
        </label>

        <label>
          Graduated
          <input 
            name="graduated" 
            type="checkbox" 
            checked={student.graduated} 
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}