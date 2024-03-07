import React, { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("2023");
  const [graduated, setGraduated] = useState(false);

  // Function to handle form submission
  const handleSubmitStudent = (e) => {
    e.preventDefault();

    // Create a new student object
    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear: parseInt(graduationYear),
      graduated,
    };

    // Call the function passed from the parent component to handle adding the new student
    handleAddStudent(newStudent);

    // Reset form inputs
    setFullName("");
    setEmail("");
    setPhone("");
    setProgram("");
    setImage("");
    setGraduationYear("2023");
    setGraduated(false);
  };

  return (
    <form>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={program}
            onChange={(e) => setProgram(e.target.value)}
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
            placeholder="Graduation Year"
            min="2023"
            max="2030"
            value={graduationYear}
            onChange={(e) => setGraduationYear(e.target.value)}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={(e) => setGraduated(e.target.checked)}
          />
        </label>

        <button type="submit" onClick={handleSubmitStudent}>
          Add Student
        </button>
      </div>
    </form>
  );
}
export default AddStudent;
