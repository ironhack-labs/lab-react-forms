import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  // State variables for the form inputs
  const [fullName, setFullName] = useState("");         // text input
  const [image, setImage] = useState("");               // url input
  const [phone, setPhone] = useState("");               // tel input
  const [email, setEmail] = useState("");               // email input
  const [program, setProgram] = useState("Web Dev");    // select input (default to first option)
  const [graduationYear, setGraduationYear] = useState(2023); // number input (default to min value)
  const [graduated, setGraduated] = useState(false);    // checkbox input (default to false)

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create new student object
    const newStudent = {
      fullName,
      email,
      phone,
      program,
      image,
      graduationYear,
      graduated,
    };

    // Call the handleAddStudent prop function to pass new student data up to App
    handleAddStudent(newStudent);

    // Reset form fields after submission
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
    setGraduated(false);
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
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            min={2023}
            max={2030}
            onChange={(e) => setGraduationYear(Number(e.target.value))}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={graduated}
            onChange={(e) => setGraduated(e.target.checked)}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
