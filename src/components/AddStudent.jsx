import { useState } from "react";

function AddStudent(props) {
  const [student, setStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.addStudent(student);

    setStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
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
            value={student.fullName}
            onChange={handleChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            value={student.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            value={student.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            value={student.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={student.program}
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
            value={student.graduationYear}
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
            checked={student.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
