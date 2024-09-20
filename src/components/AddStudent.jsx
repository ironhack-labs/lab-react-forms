import { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {
  const [formInputValue, setFormInputs] = useState({
    fullName: "",
    image: "",
    phone: 0,
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });
  function handleSubmit(event) {
    event.preventDefault();
    handleAddStudent({ id: Math.random(), ...formInputValue });
  }
  function handleChange(event) {
    const currentTarget = event.target.name;
    let currentValue = event.target.value;
    if (event.target.type === "checkbox") {
      currentValue = event.target.checked;
    }
    setFormInputs({ ...formInputValue, [currentTarget]: currentValue });
  }
  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            value={formInputValue.fullName}
            name="fullName"
            type="text"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            value={formInputValue.image}
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            value={formInputValue.phone}
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            value={formInputValue.email}
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={formInputValue.program}
            onChange={handleChange}
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
            checked={formInputValue.graduated}
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={handleChange}
          />
        </label>

        <label>
          Graduated
          <input name="graduated" type="checkbox" onChange={handleChange} />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
