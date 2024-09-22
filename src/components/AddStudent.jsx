import React, { useState } from "react";

export const AddStudent = ({ handleAddStudents }) => {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const handleName = (e) => {
    setFullName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanleSelect = (e) => {
    setProgram(e.target.value);
  };
  const handleGraduationYear = (e) => {
    setGraduationYear(e.target.value);
  };
  const handleChecked = (e) => {
    setGraduated(e.target.checked);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    let prov = {};
    prov = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };
    handleAddStudents(prov);
    setFullName("");
    setImage("");
    setEmail("");
    setPhone("");
    setProgram("");
    setGraduationYear(0);
    setGraduated(false);
  };
  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleName}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={handleImage}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={handlePhone}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={program} onChange={hanleSelect}>
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
            value={graduated}
            onChange={handleGraduationYear}
          />
        </label>

        <label>
          Graduated
          <input name="graduated" type="checkbox" onChange={handleChecked} />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};
