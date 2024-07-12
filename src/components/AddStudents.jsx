import React, { useState } from "react";

function AddStudent({ onAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [program, setProgram] = useState("2023");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [graduated, setGraduated] = useState(false);
  const [graduationYear, setGraduationYear] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.value);
  };
  const handleProgram = (e) => {
    setProgram(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleGraduated = (e) => {
    setGraduated(e.target.checked);
  };
  const handleGraduationYear = (e) => {
    setGraduationYear(e.target.value);
  };

  const resetFormInputs = () => {
    setFullName("");
    setImage("");
    setProgram("2023");
    setEmail("");
    setPhone("");
    setGraduated(false);
    setGraduationYear("");
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName,
      image,
      program,
      email,
      phone,
      graduated,
      graduationYear,
    };
    onAddStudent(newStudent);
    resetFormInputs();
  };

  return (
    <form onSubmit={handleAddStudent}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleFullName}
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
          <select name="program" value={program} onChange={handleProgram}>
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
            value={graduationYear}
            onChange={handleGraduationYear}
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={handleGraduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
