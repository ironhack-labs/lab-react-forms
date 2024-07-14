import { useState } from "react";

function AddNewStudent({ handleFormSubmit }) {
    
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("--None--");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function handleButton(event) {
    
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };
    handleFormSubmit(event, newStudent);
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("--None--");
    setGraduationYear(2023);
  }

  function handleNameChange(event) {
    setFullName(event.currentTarget.value);
  }

  function handleImageChange(event) {
    setImage(event.currentTarget.value);
  }

  function handlePhoneChange(event) {
    setPhone(event.currentTarget.value);
  }

  function handleEmailChange(event) {
    setEmail(event.currentTarget.value);
  }

  function handleProgramChange(event) {
    setProgram(event.currentTarget.value);
  }

  function handleGraduationYearChange(event) {
    setGraduationYear(event.currentTarget.value);
  }

  return (
    <form onSubmit={handleButton}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={handleNameChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={handleImageChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={handlePhoneChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={program} onChange={handleProgramChange}>
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
            onChange={handleGraduationYearChange}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={() => setGraduated(!graduated)}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddNewStudent;
