import { useState } from "react";

export function AddStudent(props) {


  const [fullName, setFullName] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [image, setImage] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [phone, setPhone] = useState(0);
  const [graduated, setGraduated] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    props.addStudent(newStudent)
  };

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            value={fullName}
            type="text"
            placeholder="Full Name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            value={image}
            type="url"
            placeholder="Profile Image"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            value={phone}
            type="tel"
            placeholder="Phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            value={email}
            type="email"
            placeholder="Email"
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
            onChange={(e) => {
              setProgram(e.target.value);
            }}
            value={program}
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
            value={graduationYear}
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={(e) => {
              setGraduationYear(e.target.value);
            }}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            value={graduated}
            type="checkbox"
            onChange={(e) => {
              setGraduated(e.target.value);
            }}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}
