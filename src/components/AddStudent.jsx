import { useState } from "react";

const AddStudent = ({ handleSubmit }) => {
  const [student, setStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "-- None --",
    graduationYear: 2023,
    graduated: false,
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(student);

    // Clear the form
    setStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "-- None --",
      graduationYear: 2023,
      graduated: false,
    });
  };

  const handleChange = (e) => {
    const inputName = e.target.name;
    if (inputName === "graduated") {
      setStudent({ ...student, [inputName]: e.target.checked });
      return;
    }
    setStudent({ ...student, [inputName]: e.target.value });
    console.log(student);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            value={student.fullName}
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Profile Image
          <input
            value={student.image}
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Phone
          <input
            value={student.phone}
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Email
          <input
            value={student.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            value={student.program}
            onChange={(e) => handleChange(e)}
            name="program"
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
            value={student.graduationYear}
            onChange={(e) => handleChange(e)}
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
            checked={student.graduated}
            name="graduated"
            type="checkbox"
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
