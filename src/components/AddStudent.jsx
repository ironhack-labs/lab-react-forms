import React, { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    handleAddStudent(newStudent);

    // Clearing form
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
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
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            onChange={(e) => setImage(e.target.value)}
            value={image}
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={(e) => setProgram(e.target.value)}
            value={program}
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
            name="graduationYear"
            type="number"
            onChange={(e) => setGraduationYear(parseInt(e.target.value))}
            value={graduationYear}
            placeholder="Graduation Year"
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            onChange={(e) => setGraduated(e.target.checked)}
            checked={graduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
