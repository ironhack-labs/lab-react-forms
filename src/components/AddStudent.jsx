import React from 'react'
import { useState } from "react";


function AddStudent({setStudents}) {
   

  const [fullNameValue, setFullNameValue] = useState("");
  const [profileImageValue, setProfileImageValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [selectProgramValue, setSelectProgramValue] = useState("none");
  const [graduationYearValue, setGraduationYearValue] = useState(2023);

  const handleFullNameChange = (event) => {
    setFullNameValue(event.target.value);
  };
  const handleProfileImageChange = (event) => {
    setProfileImageValue(event.target.value);
  };
  const handlePhoneValueChange = (event) => {
    setPhoneValue(event.target.value);
  };
  const handleEmailValueChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleCheckboxValueChange = (event) => {
    setCheckboxValue(event.target.value);
  };
  const handleSelectProgramValueChange = (event) => {
    setSelectProgramValue(event.target.value);
  };
  const handleGraduationYearChange = (event) => {
    setGraduationYearValue(event.target.value);
  };
  
  const handleAddStudent = (event) =>{
    event.preventDefault()

    const newStudent = {
    fullName: fullNameValue,
    email: emailValue,
    phone: phoneValue,
    program: selectProgramValue,
    image: profileImageValue,
    graduationYear:graduationYearValue,
    graduated: checkboxValue,
    }

    setStudents((currentValue)=>[newStudent, ...currentValue])
  }

  return (
    <>
    
    {/* FORM */}
    <form onSubmit={handleAddStudent}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            onChange={handleFullNameChange}
            value={fullNameValue}
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            onChange={handleProfileImageChange}
            value={profileImageValue}
            name="image"
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            onChange={handlePhoneValueChange}
            value={phoneValue}
            name="phone"
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            onChange={handleEmailValueChange}
            value={emailValue}
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
            onChange={handleSelectProgramValueChange}
            value={selectProgramValue}
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
            onChange={handleGraduationYearChange}
            value={graduationYearValue}
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
            onChange={handleCheckboxValueChange}
            value={checkboxValue}
            name="graduated"
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
    {/* FORM END */}

  
    </>

  );
}

export default AddStudent