import React from 'react'
import { useState } from "react";

function AddStudent({addNewStudent}) {
  const [studentValues, setStudentValues] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  });

  const handleStudentValuesOnChanged = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setStudentValues({
      ...studentValues,
      [e.target.name]: value
    });
  }


  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: studentValues.fullName,
      email: studentValues.email,
      phone: studentValues.phone,
      program: studentValues.program,
      image: studentValues.image,
      graduationYear: studentValues.graduationYear,
      graduated: studentValues.graduated
    };

    addNewStudent(newStudent);
  };

  return (
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={studentValues.fullName} onChange={handleStudentValuesOnChanged} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={studentValues.image} onChange={handleStudentValuesOnChanged} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={studentValues.phone} onChange={handleStudentValuesOnChanged} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={studentValues.email} onChange={handleStudentValuesOnChanged} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={studentValues.program} onChange={handleStudentValuesOnChanged}>
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
              value={studentValues.graduationYear}
              onChange={handleStudentValuesOnChanged}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={studentValues.graduated} onChange={handleStudentValuesOnChanged} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
  )
}

export default AddStudent