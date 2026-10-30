import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    image: "",
    graduationYear: 2023,
    graduated: false,
  });

  const handleFormData = (e) => {
    const name = e.target.name;
    let value = name === "graduated" ? e.target.checked:e.target.value;
    const stateCopy = { ...formData };
    stateCopy[name] = value;
    setFormData(stateCopy);
  };

  const addStudent = (e) => {
    e.preventDefault();
    handleAddStudent(formData);
  };

  return (
    <form>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            onChange={handleFormData}
            name="fullName"
            type="text"
            value={formData.fullName}
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            onChange={handleFormData}
            name="image"
            type="url"
            value={formData.image}
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            onChange={handleFormData}
            name="phone"
            type="tel"
            value={formData.phone}
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            onChange={handleFormData}
            name="email"
            type="email"
            value={formData.email}
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={handleFormData}
            value={formData.program}
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
            onChange={handleFormData}
            name="graduationYear"
            type="number"
            value={formData.graduationYear}
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
            onChange={handleFormData}
            name="graduated"
            type="checkbox"
            checked={formData.graduated}
          />
        </label>

        <button onClick={addStudent} type="submit">
          Add Student
        </button>
      </div>
    </form>
  );
}

export default AddStudent;
