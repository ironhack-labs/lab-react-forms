import { useState } from "react";

function AddStudent({ handleAddStudent }) { 

  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

    const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

    const handleImageChange = (e) => {
    setImage(e.target.value);
  };

    const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

    const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

    const handleProgramChange = (e) => {
    setProgram(e.target.value);
  };

    const handleGraduationChange = (e) => {
    setGraduationYear(Number(e.target.value));
  };

    const handleGraduatedChange = (e) => {
    setGraduated(e.target.checked);
  };


  const handleSubmit= (e) => {

      e.preventDefault();


      const newStudent = {
        fullName,
        image,
        phone,
        email,
        program,
        graduationYear,
        graduated
      };

      handleAddStudent(newStudent);

      setFullName("");
      setImage("");
      setPhone("");
      setEmail("");
      setProgram("");
      setGraduationYear(2023);
      setGraduated(false);
    };



    return (

        <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input value={fullName} onChange={handleFullNameChange} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input value={image} onChange={handleImageChange} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input value={phone} onChange={handlePhoneChange} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input value={email} onChange={handleEmailChange} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select value={program} onChange={handleProgramChange} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              value={graduationYear}
              onChange={handleGraduationChange}
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
            <input checked={graduated} onChange={handleGraduatedChange} name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>

    );
};


export default AddStudent