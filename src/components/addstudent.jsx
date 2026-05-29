import { useState } from "react";

const initialForm = {
  fullName: "",
  image: "",
  phone: "",
  email: "",
  program: "",
  graduationYear: 0,
  graduated: false,
};

function AddStudents({ handleAddStudents }) {
  const [data, setData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    handleAddStudents({
      ...data,
      graduationYear: Number(data.graduationYear),
    });
    setData(initialForm);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            value={data.fullName}
            onChange={handleChange}
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            value={data.image}
            onChange={handleChange}
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={data.phone}
            onChange={handleChange}
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={data.email}
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={data.program} onChange={handleChange}>
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
            value={data.graduationYear}
            onChange={handleChange}
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
            name="graduated"
            checked={data.isGraduated}
            onChange={handleChange}
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudents;
