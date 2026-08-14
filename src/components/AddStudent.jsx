import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [profilfImage, SetProfilImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [number, setNumber] = useState(2023);
  const [gratuadation, setGraduation] = useState(false);

  function handleSubmit(event) {
    
    event.preventDefault();
    const newStudent = {
      fullName,
      profilfImage,
      phone,
      email,
      program,
      number,
      gratuadation,
    };
    handleAddStudent(newStudent);
    // Vider le formulaire
    setFullName("");
    setEmail("");
    setPhone("");
    setGraduation(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            value={profilfImage}
            onChange={(event) => SetProfilImage(event.target.value)}
            name="image"
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            name="phone"
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            type="email"
            placeholder="Email"
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
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            checked={gratuadation}
            onChange={(e) => setGraduation(e.target.checked)}
            name="graduated"
            type="checkbox"
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
