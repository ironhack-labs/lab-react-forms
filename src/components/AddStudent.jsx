import { useState } from "react";

function AddStudent({ addStudent }) {
  const initNewStudent = {
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  };

  const [newStudent, setNewStudent] = useState(initNewStudent);

  const handleChange = (event) => {
    const currentName = event.target.name;
    const currentValue = event.target.value;
    const currentChecked = event.target.checked;
    if (event.target.name === "graduated") {
      setNewStudent({ ...newStudent, [currentName]: currentChecked });
    } else {
      setNewStudent({ ...newStudent, [currentName]: currentValue });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    addStudent(newStudent);

    setNewStudent(initNewStudent);
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
            value={newStudent.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={newStudent.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={newStudent.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={newStudent.program}
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
            value={newStudent.graduationYear}
            onChange={handleChange}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={newStudent.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
