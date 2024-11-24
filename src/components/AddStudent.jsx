import { useState } from "react";

const initialData = {
  fullName: "",
  image: "",
  phone: "",
  email: "",
  program: "",
  graduationYear: 2023,
  graduated: false,
};

function AddStudent({ handleAddStudent }) {
  const [data, setData] = useState(initialData);

  const onSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      ...data,
    };

    handleAddStudent(newStudent);

    setData(initialData);
  };

  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  
  return (
    <form onSubmit={onSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            id="fullName"
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={data.fullName}
            onChange={onChange}
          />
        </label>

        <label>
          Profile Image
          <input
            id="image"
            name="image"
            type="url"
            placeholder="Profile Image"
            value={data.image}
            onChange={onChange}
          />
        </label>

        <label>
          Phone
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="Phone"
            value={data.phone}
            onChange={onChange}
          />
        </label>

        <label>
          Email
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            value={data.email}
            onChange={onChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={data.program} onChange={onChange}>
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
            value={data.graduationYear}
            onChange={onChange}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={data.graduated}
            onChange={onChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;