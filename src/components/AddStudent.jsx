import { useState } from "react";

function AddStudent({ students, setStudents }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2025);
  const [graduated, setGraduated] = useState(false);

  function handleAddStudent(event) {
    event.preventDefault();

    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };

    setStudents([newStudent, ...students]);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2025);
    setGraduated(false);
  }

  function handleOnChange(event) {
    let name = event.target.name;
    console.log(name);
    console.log(event.target.value);
    console.log(event);
    if (name === "graduated")
      this.setState({
        [name]: event.target.checked,
      });
    else {
      this.setState({
        [name]: event.target.value,
      });
    }
  }

  return (
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
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={program}
            onChange={(e) => {
              setProgram(e.target.value);
            }}
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
            onChange={(e) => {
              setGraduationYear(e.target.value);
            }}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={(e) => {
              setGraduated(e.target.checked);
            }}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
