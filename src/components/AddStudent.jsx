import React from "react";
import { useState } from "react";

export default function AddStudent(props) {
  const [fullName, setfullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameChange = (event) => {
    let value = event.target.value;

    setfullName(value);
  };

  const handleImageChange = (event) => {
    let value = event.target.value;

    setImage(value);
  };

  const handlePhoneChange = (event) => {
    let value = event.target.value;

    setPhone(value);
  };

  const handleEmailChange = (event) => {
    let value = event.target.value;

    setEmail(value);
  };

  const handleProgramChange = (event) => {
    let value = event.target.value;

    setProgram(value);
  };

  const handleGraduationYearChange = (event) => {
    let value = event.target.value;

    setGraduationYear(value);
  };

  const handleGraduatedChange = (event) => {
    let value = event.target.value;

    setGraduated(value);
  };

  const handleFormSubmit = (event) => {
    let nuevoEstudiante = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    props.agregarNuevoEstudiante(nuevoEstudiante);

    event.preventDefault();
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              value={fullName}
              onChange={handleFullNameChange}
              name="fullName"
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label>
            Profile Image
            <input
              value={image}
              onChange={handleImageChange}
              name="image"
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label>
            Phone
            <input
              value={phone}
              onChange={handlePhoneChange}
              name="phone"
              type="tel"
              placeholder="123-456-789"
            />
          </label>

          <label>
            Email
            <input
              value={email}
              onChange={handleEmailChange}
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
              value={program}
              onChange={handleProgramChange}
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
              value={graduationYear}
              onChange={handleGraduationYearChange}
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
              checked={graduated}
              onChange={handleGraduatedChange}
              name="graduated"
              type="checkbox"
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}
