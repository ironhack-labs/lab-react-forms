import React from "react";
import { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const studentToAdd = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };
    handleAddStudent(studentToAdd);

    //reset the states
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear("");
    setGraduated("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={program}
            onChange={(event) => setProgram(event.target.value)}
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
            value={graduationYear}
            onChange={(event) => setGraduationYear(event.target.value)}
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
            name="graduated"
            value={graduated}
            onChange={(event) => setGraduated(event.target.value)}
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
