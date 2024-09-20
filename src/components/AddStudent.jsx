import { useState } from "react";

function AddStudent({setStudents}) {

  const [ student, setStudent ] = useState({fullName: "", image: "", phone: "", email: "", program: "None", graduationYear: 2024, graduated: false});

  const handleChange = (event) => setStudent({...student, [event.target.name]: event.target.value})

  const handleAddStudent = (event) => {
    event.preventDefault()

    const newStudent = {
      fullName: student.fullName,
      image: student.image,
      phone: student.phone,
      email: student.email,
      program: student.program,
      graduationYear: student.graduationYear,
      graduated: student.graduated
    }
    
    setStudents((current) => [newStudent, ...current])
  }

  return (
    <form onSubmit={handleAddStudent}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input onChange={handleChange} value={student.fullName} name="fullName" type="text" placeholder="Full Name" />
        </label>

        <label>
          Profile Image
          <input
            onChange={handleChange}
            value={student.image}
            name="image"
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            onChange={handleChange}
            value={student.phone}
            name="phone"
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            onChange={handleChange}
            value={student.email}
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
            onChange={handleChange}
            checked={student.program}
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
            onChange={handleChange}
            value={student.graduationYear}
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            onChange={handleChange}
            value={student.graduated}
            name="graduated"
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
