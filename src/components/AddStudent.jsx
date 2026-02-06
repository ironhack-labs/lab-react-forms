import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const [program, setProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState(2026);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };

    handleAddStudent(newStudent);

    // reset form
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2026);
    setGraduated(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>

      <input
        type="text"
        placeholder="Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />

      <input
        type="url"
        placeholder="Profile Image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <select value={program} onChange={(e) => setProgram(e.target.value)}>
        <option value="">-- None --</option>
        <option value="Web Dev">Web Dev</option>
        <option value="UXUI">UXUI</option>
        <option value="Data">Data</option>
      </select>

      <input
        type="number"
        min={2023}
        max={2030}
        value={graduationYear}
        onChange={(e) => setGraduationYear(Number(e.target.value))}
      />

      <label>
        Graduated
        <input
          type="checkbox"
          checked={graduated}
          onChange={(e) => setGraduated(e.target.checked)}
        />
      </label>

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudent;
