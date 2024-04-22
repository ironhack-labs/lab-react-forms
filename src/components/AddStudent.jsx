import { useState } from "react";

const AddStudent = (props) => {
  const [formName, setFormName] = useState("");
  const [formImage, setFormImage] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formProgram, setFormProgram] = useState("-- None --");
  const [formGraduationYear, setFormGraduationYear] = useState("");
  const [formGraduated, setFormGraduated] = useState(false);

  const handleFormName = (e) => {
    setFormName(e.target.value);
  };

  const handleFormImage = (e) => {
    setFormImage(e.target.value);
  };

  const handleFormPhone = (e) => {
    setFormPhone(e.target.value);
  };

  const handleFormEmail = (e) => {
    setFormEmail(e.target.value);
  };

  const handleFormProgram = (e) => {
    setFormProgram(e.target.value);
  };

  const handleFormGraduationYear = (e) => {
    setFormGraduationYear(e.target.value);
  };

  const handleFormGraduated = (e) => {
    setFormGraduated(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: formName,
      image: formImage,
      phone: formPhone,
      email: formEmail,
      program: formProgram,
      graduationYear: formGraduationYear,
      graduated: formGraduated,
    };

    props.handleAddStudent(newStudent);

    // reset form
    setFormName("");
    setFormImage("");
    setFormPhone("");
    setFormEmail("");
    setFormProgram("-- None --");
    setFormGraduationYear("");
    setFormGraduated(false);
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
            onChange={handleFormName}
            value={formName}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={handleFormImage}
            value={formImage}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handleFormPhone}
            value={formPhone}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleFormEmail}
            value={formEmail}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" onChange={handleFormProgram}>
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
            onChange={handleFormGraduationYear}
            value={formGraduationYear}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            onChange={handleFormGraduated}
            value={formGraduated}
          />
        </label>

        <button type="submit" onClick={handleFormSubmit}>
          Add Student
        </button>
      </div>
    </form>
  );
};

export default AddStudent;
