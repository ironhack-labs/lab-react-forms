import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFullNameInput = (e) => setFullName(e.target.value);
  const handleImageInput = (e) => setImage(e.target.value);
  const handlePhoneInput = (e) => setPhone(e.target.value);
  const handleEmailInput = (e) => setEmail(e.target.value);
  const handleProgramInput = (e) => setProgram(e.target.value);
  const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
  const handleGraduatedInput = (e) => setGraduated(e.target.checked);

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
    setStudents([...students, newStudent]);

  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            value={fullName}
            onChange={handleFullNameInput}
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            value={image}
            onChange={handleImageInput}
            name="image"
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            value={phone}
            onChange={handlePhoneInput}
            name="phone"
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={handleEmailInput}
            name="email"
            type="email"
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select value={program} onChange={handleProgramInput} name="program">
            <option value="-- None --">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            value={graduationYear}
            onChange={handleGraduationYearInput}
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
            onChange={handleGraduatedInput}
            name="graduated"
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
