import React from "react";
import { useState } from "react";

export default function AddStudent(props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [program, setProgram] = useState("");
  const [image, setImage] = useState("");
  const [graduated, setGraduated] = useState(false);
  const [graduationYear, setGraduationYear] = useState(2023);

  const handleNewName = (event) => {
    setFullName(event.target.value);
  };
  const handleNewEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleNewPhone = (event) => {
    setPhone(event.target.value);
  };
  const handleNewProgram = (event) => {
    setProgram(event.target.value);
  };
  const handleNewImage = (event) => {
    setImage(event.target.value);
  };
  const handleNewGraduated = (event) => {
    setGraduationYear(event.target.value);
  };
  const handleIsGraduated = (event) => {
    setGraduated(event.target.checked);
  };
  const handleAddStudent = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduated,
      graduationYear,
    };

    console.log(newStudent);

    props.setStudents([...props.students, newStudent]);

    setFullName("");
    setEmail("");
    setPhone("");
    setProgram("");
    setImage("");
    setGraduated(false);
    setGraduationYear(2023);
  };

  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleNewName}
              value={fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleNewImage}
              value={image}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handleNewPhone}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleNewEmail}
              value={email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleNewProgram} value={program}>
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
              onChange={handleNewGraduated}
              value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={handleIsGraduated}
              checked={graduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
}