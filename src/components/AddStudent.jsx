import { useState } from "react";

export default function AddStudent({ setStudents }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(2023);

  const handleInputChange = (e) => {
    const { name, type, value, checked } = e.target;
    const setValue = {
      fullName: setFullName,
      image: setImage,
      phone: setPhone,
      email: setEmail,
      program: setProgram,
      graduationYear: setGraduationYear,
      graduated: setGraduated,
    };

    setValue[name](type === "checkbox" ? checked : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const student = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    setStudents(student);

    // Reset the state
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("-- None --");
    setGraduationYear(2023);
    setGraduated(2023);
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleInputChange} />
        </label>

        <label>
          Profile Image
          <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleInputChange} />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handleInputChange} />
        </label>

        <label>
          Email
          <input name="email" type="email" placeholder="Email" value={email} onChange={handleInputChange} />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={program} onChange={handleInputChange}>
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
            value={graduationYear}
            onChange={handleInputChange}
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input name="graduated" type="checkbox" value={graduated} onChange={handleInputChange} />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}
