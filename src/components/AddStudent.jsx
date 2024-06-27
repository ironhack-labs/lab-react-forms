import React, { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
  // State variables for form inputs
  const [formState, setFormState] = useState({
    fullName: '',
    image: '',
    phone: '',
    email: '',
    program: '', // default to ""
    graduationYear: 2023, // default to 2023
    graduated: false, // default to false
  });

  // Generic handler function for all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    setFormState({
      ...formState,
      [name]: newValue,
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Call the parent component's function to handle adding the student
    handleAddStudent(formState);

    // Clear the form inputs after submission
    setFormState({
      fullName: '',
      image: '',
      phone: '',
      email: '',
      program: '',
      graduationYear: 2023,
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
            value={formState.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={formState.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formState.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formState.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={formState.program}
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
            value={formState.graduationYear}
            onChange={handleChange}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={formState.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
