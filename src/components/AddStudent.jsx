import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2025,
    graduated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setStudents((prevStudents) => [...prevStudents, formData]);
    handleAddStudent(formData);
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2025,
      graduated: false,
    });
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
            onChange={handleChange}
            value={formData.fullName}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={handleChange}
            value={formData.image}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={handleChange}
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
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={handleChange}
            value={formData.graduationYear}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            onChange={handleChange}
            checked={formData.graduated}
          />
        </label>

        <button type="submit" onClick={handleSubmit}>
          Add Student
        </button>
      </div>
    </form>
  );
}

export default AddStudent;
