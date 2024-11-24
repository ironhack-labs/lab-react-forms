import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState(0);
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [isGraduated, setIsGraduated] = useState(false);

  const handleFullName = (e) => setFullName(e.target.value);
  const handleImage = (e) => setImage(e.target.value);
  const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleProgram = (e) => setProgram(e.target.value);
  const handleGraduationYear = (e) => setGraduationYear(e.target.value);
  const handleIsGraduated = (e) => setIsGraduated(e.target.checked);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      isGraduated,
    };
    handleAddStudent(newStudent);

    setFullName("");
    setImage("");
    setPhone(0);
    setEmail("");
    setProgram("");
    setGraduationYear(0);
    setIsGraduated(false);
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
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={graduationYear}
            onChange={handleGraduationYear}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={isGraduated}
            onChange={handleIsGraduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
