import React from 'react'
import { useState } from "react";

function AddStudent({handleAddNewStudent}) {
      
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

   const handleFullNameChange = (e) => setFullName(e.target.value);
   const handlePhoneChange = (e) => setPhone(e.target.value);
   const handleEmailChange = (e) => setEmail(e.target.value);
   const handleGraduationYearChange = (e) => setGraduationYear(e.target.value);
   const handleImageChange = (e) => setImage(e.target.value);
   const handleProgramChange = (e) => setProgram(e.target.value);
   const handleGraduatedChange = (e) => setGraduated(e.target.value);
   const studentToAdd = {
fullName,
  email,
  phone,
  program,
  image,
  graduationYear,
  graduated,}

  return (

    <form onSubmit={(e)=>handleAddNewStudent(e,studentToAdd)}>

        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImageChange}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneChange}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgramChange} >
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
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedChange}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
  )
}

export default AddStudent
