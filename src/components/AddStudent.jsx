import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [student, setStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  const handleFormInput = (e) => {
    const { name, value, type, checked } = e.target;
    setStudent((prevStudent) => ({
      ...prevStudent,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddStudent(student);
    setStudent({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
    })
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={student.fullName}
              onChange={handleFormInput}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={student.image}
              onChange={handleFormInput}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={student.phone}
              onChange={handleFormInput}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={student.email}
              onChange={handleFormInput}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={student.program}
              onChange={handleFormInput}
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
              value={student.graduationYear}
              onChange={handleFormInput}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={student.graduated}
              onChange={handleFormInput}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </>
  );
}

export default AddStudent;
