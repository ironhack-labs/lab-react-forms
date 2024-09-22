import React from 'react'
import { useState } from 'react';
import Navbar from "../components/Navbar";
import TableHeader from "../components/TableHeader";
import StudentCard from "../components/StudentCard";
import studentsData from "../assets/students.json";

function AddStudent({handleAddStudent}) {
  const [students, setStudents] = useState(studentsData)
  const [fullName, setFullName] = useState('')
  const [img, setImg] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)

  const handleFullNameChange = (event) => {
    setFullName(event.target.value)
    console.log(event.target.value)
  }

  const handleImgChange = (event) => {
    setImg(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setPhone(event.target.value)
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
  }

  const handleProgramChange = (event) => {
    setProgram(event.target.value)
  }

  const handleGraduationYearChange = (event) => {
    setGraduationYear(event.target.value)
  }

  const handleGraduatedChange = (event) => {
    setGraduated(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName,
      email,
      phone,
      program,
      img,
      graduationYear,
      graduated,
    };

    setStudents([...students, newStudent]);
    handleAddStudent(newStudent);

    setFullName('');
    setImg('');
    setPhone('');
    setEmail('');
    setProgram('');
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input value={fullName} onChange={handleFullNameChange} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input value={img} onChange={handleImgChange} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input value={phone} onChange={handlePhoneChange} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input value={email} onChange={handleEmailChange} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              value={graduationYear} onChange={handleGraduationYearChange}
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
            <input value={graduated} onChange={handleGraduatedChange}
              name="graduated" type="checkbox" />
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
  )
}

export default AddStudent