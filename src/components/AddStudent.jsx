import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const initialState = {
    fullName: "",
    profileImg: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]:
        type === "checkbox"
          ? checked
          : name === "graduationYear"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddStudent(formData);
    setFormData(initialState);
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
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="profileImg"
            type="url"
            placeholder="Profile Image"
            value={formData.profileImg}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={formData.program}
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
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={formData.graduationYear}
            onChange={handleChange}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={formData.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
