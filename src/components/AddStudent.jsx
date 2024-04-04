import { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");
  // const [program, setProgram] = useState("");

  // const [image, setImage] = useState("");
  // const [graduationYear, setGraduationYear] = useState(0);
  // const [graduated, setGraduated] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddStudent({
      ...formData,
    });
  };

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    image: "",
    graduationYear: 0,
    graduated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, min, max } = e.target;

    // Update state based on input type
    switch (type) {
      case "checkbox":
        // For checkboxes, set the checked value directly
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
        break;
      case "number":
        // For number inputs, ensure the value is within the min and max limits
        const year = value === "" ? null : Math.min(Math.max(value, min), max);
        setFormData((prevData) => ({
          ...prevData,
          [name]: year,
        }));
        break;
      default:
        // For other input types (text, email, tel, etc.), set the value directly
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
        break;
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              value={formData.fullName}
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              value={formData.image}
              type="url"
              placeholder="Profile Image"
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={formData.phone}
              type="tel"
              placeholder="Phone"
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={formData.email}
              type="email"
              placeholder="Email"
              onChange={handleChange}
              required
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
              required
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
              value={formData.graduationYear || ""}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
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
    </>
  );
};

export default AddStudent;
