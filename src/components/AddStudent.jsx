import { useState } from "react";
const AddStudent = ({ handleAddStudent }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });
  function handleChanges(e) {
    const { name, value, type, checked } = e.target;
    setFormData((newStudent) => ({
      ...newStudent,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  /*const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);*/

  function handleFormSubmit(e) {
    e.preventDefault();

    /*const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };
    handleAddStudent(newStudent);*/
    handleAddStudent(formData);
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false,
    });
    /*
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);*/
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
            value={formData.fullName}
            onChange={handleChanges}
            /* value={fullName}
            onChange={(e) => setFullName(e.target.value)}*/
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={formData.image}
            onChange={handleChanges}
            /* value={image}
            onChange={(e) => setImage(e.target.value)}*/
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChanges}
            /*value={phone}
            onChange={(e) => setPhone(e.target.value)}*/
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChanges}
            /*value={email}
            onChange={(e) => setEmail(e.target.value)}*/
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={formData.program}
            onChange={handleChanges}
            /* value={program}
            onChange={(e) => setProgram(e.target.value)}*/
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
            value={formData.graduationYear}
            onChange={handleChanges}
            /* value={graduationYear}
            onChange={(e) => setGraduationYear(Number(e.target.value))}*/
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={formData.graduated}
            onChange={handleChanges}
            /*checked={graduated}
            onChange={(e) => setGraduated(e.target.checked)}*/
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
