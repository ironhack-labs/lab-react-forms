import { useState } from "react";
const AddStudent = ({ handleAddStudent, handleChange}) => {
    const [image, setImage] = useState("");
    const [fullName, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] =useState("-- None --");
    const [graduationYear, setGraduationYear] = useState();
    const [graduated, setGraduated] = useState(false);
  

  return (
    <>
      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={handleChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={image}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
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
              value={graduationYear}
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              value={graduated}
              onChange={(e) => setGraduated(e.target.checked)}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}
    </>
  );
};

export default AddStudent;
