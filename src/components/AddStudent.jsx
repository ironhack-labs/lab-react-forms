import React, { useState } from "react";

const AddStudent = ({ onAddStudent }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "-- None --",
    image: "",
    graduationYear: 2023,
    graduated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddStudent(formData);
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      program: "-- None --",
      image: "",
      graduationYear: 2023,
      graduated: false,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 bg-gray-100 rounded shadow-md">
      <h2 className="text-xl font-bold">Add a Student</h2>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <input
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Full Name"
          required
          className="p-2 border rounded"
        />
        <select
          name="program"
          value={formData.program}
          onChange={handleChange}
          className="p-2 border rounded"
        >
          <option value="-- None --">-- None --</option>
          <option value="Web Dev">Web Dev</option>
          <option value="Data Analytics">Data Analytics</option>
          <option value="UX/UI">UX/UI</option>
        </select>
        <input
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Profile Image URL"
          className="p-2 border rounded"
        />
        <input
          name="graduationYear"
          type="number"
          min="2023"
          max="2030"
          value={formData.graduationYear}
          onChange={handleChange}
          placeholder="Graduation Year"
          required
          className="p-2 border rounded"
        />
        <input
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="p-2 border rounded"
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="p-2 border rounded"
        />
        <label className="flex items-center">
          <input
            name="graduated"
            type="checkbox"
            checked={formData.graduated}
            onChange={handleChange}
            className="mr-2"
          />
          Graduated
        </label>
      </div>
      <button type="submit" className="btn-primary mt-4">
        Add Student
      </button>
    </form>
  );
};

export default AddStudent;
