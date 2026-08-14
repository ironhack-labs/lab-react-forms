import { useState } from "react";

function AddStudent(props) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleInputs = (setter) => (event) => {
    setter(event.target.type === 'checkbox' ? event.target.checked : event.target.value)
  };

  const handleAddStudent = (e) => {
    e.preventDefault();

    let student = {
      fullName: fullName,
      image: image,
      phone: phone,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    props.setStudents((state) => [...state, student]);
  };

  return (
    <form onSubmit={handleAddStudent}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            onChange={handleInputs(setFullName)}
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
          />
        </label>

        <label>
          Profile Image
          <input
            onChange={handleInputs(setImage)}
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
          />
        </label>

        <label>
          Phone
          <input
            onChange={handleInputs(setPhone)}
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
          />
        </label>

        <label>
          Email
          <input
            onChange={handleInputs(setEmail)}
            name="email"
            type="email"
            placeholder="Email"
            value={email}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select onChange={handleInputs(setProgram)} value={program} name="program">
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
            value={graduationYear}
            onChange={handleInputs(setGraduationYear)}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            onChange={handleInputs(setGraduated)}
            name="graduated"
            type="checkbox"
            checked={graduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
