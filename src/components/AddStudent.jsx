import React, { useState } from "react";

function AddStudent({ students, setStudents }) {
  const MIN_GRADUATION_YEAR = 2023;
  const [state, setState] = React.useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: MIN_GRADUATION_YEAR,
    graduated: false,
  });

  const handleOnChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  const handleAddStudent = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName: state.fullName,
      email: state.email,
      phone: state.phone,
      program: state.program,
      image: state.image,
      graduationYear: state.graduationYear,
      graduated: state.graduated,
    };
    setStudents([...students, newStudent]);
    // clear form
    setState({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: MIN_GRADUATION_YEAR,
      graduated: false,
    });
  };
  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={state.fullName} onChange={handleOnChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={state.image} onChange={handleOnChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={state.phone} onChange={handleOnChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={state.email} onChange={handleOnChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={state.program} onChange={handleOnChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input name="graduationYear" type="number" placeholder="Graduation Year" minLength={4} maxLength={4} min={MIN_GRADUATION_YEAR} max={2030} value={state.graduationYear} onChange={handleOnChange} />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={state.graduated} onChange={handleOnChange} />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
}
export default AddStudent;
