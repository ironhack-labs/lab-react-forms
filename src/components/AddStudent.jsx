import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  // State for all inputs
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "Web Development",
    graduationYear: 2023,
    graduated: false,
  });

  // Generic input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddStudent(formData);
    // Reset form
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "Web Development",
      graduationYear: 2023,
      graduated: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <div>
        <label>
          Full Name:
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Image URL:
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Phone:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program:
          <select name="program" value={formData.program} onChange={handleChange}>
            <option value="Web Development">Web Development</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="UX/UI Design">UX/UI Design</option>
          </select>
        </label>
      </div>

      <div>
        <label>
          Graduation Year:
          <input
            type="number"
            name="graduationYear"
            value={formData.graduationYear}
            min={2023}
            max={2030}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Graduated:
          <input
            type="checkbox"
            name="graduated"
            checked={formData.graduated}
            onChange={handleChange}
          />
        </label>
      </div>

      <button type="submit" style={{ marginTop: "10px" }}>
        Add Student
      </button>
    </form>
  );
}

export default AddStudent;
