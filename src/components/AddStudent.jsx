import { useState } from "react";

export const AddStudent = (props) => {
  const [oneStudent, setOneStudent] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    image: "",
    graduationYear: 2023,
    graduated: false,
  });

  function handleInput(e) {
    console.log(e);
    const name = e.target.name;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setOneStudent({ ...oneStudent, [name]: value });
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    props.setStudents([...props.students, oneStudent]);
    resetOneStudent();
  }

  function resetOneStudent() {
    setOneStudent({
      fullName: "",
      email: "",
      phone: "",
      program: "",
      image: "",
      graduationYear: 2023,
      graduated: false,
    });
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={oneStudent.fullName}
            onChange={handleInput}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={oneStudent.image}
            onChange={handleInput}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={oneStudent.phone}
            onChange={handleInput}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={oneStudent.email}
            onChange={handleInput}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={oneStudent.program}
            onChange={handleInput}
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
            value={oneStudent.graduationYear}
            onChange={handleInput}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={oneStudent.graduated}
            onChange={handleInput}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};
