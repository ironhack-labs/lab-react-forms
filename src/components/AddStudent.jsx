import { useState } from "react";

function AddStudent({ addStudent }) {
  const [studentInput, setStudentInput] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;
    setStudentInput({ ...studentInput, [name]: inputValue });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents the form from refreshing the page

    addStudent(studentInput);

    setStudentInput({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      image: "",
      graduationYear: "",
      graduated: false,
    });
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
            onChange={handleChange}
            value={studentInput.fullName}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={handleChange}
            value={studentInput.image}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
            value={studentInput.phone}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={studentInput.email}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" onChange={handleChange} value={studentInput.program}>
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
            onChange={handleChange}
            value={studentInput.graduationYear}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            onChange={handleChange}
            checked={studentInput.graduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
