import { useState } from "react";
function Addstudents(props) {
  //state variable
  const [fullNameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [programValue, setProgramValue] = useState("");
  const [imageValue, setImageValue] = useState("");
  const [graduationYearValue, setGraduationYearValue] = useState(2023);
  const [graduatedValue, setGraduatedValue] = useState(false);

  //handle, eventos onChange
  const handleFullNameChange = (event) => {
    setFullNameValue(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmailValue(event.target.value);
  };
  const handlePhoneChange = (event) => {
    setPhoneValue(event.target.value);
  };
  const handleProgramChange = (event) => {
    setProgramValue(event.target.value);
  };
  const handleImageChange = (event) => {
    setImageValue(event.target.value);
  };
  const handleGraduationAgeChange = (event) => {
    setGraduationYearValue(event.target.value);
  };
  const handleGraduatedChange = (event) => {
    setGraduatedValue(!graduatedValue);
  };

  //* botón submit
  const handleSubmit = (event) => {
    event.preventDefault();

    const newStudent = {
      fullName: fullNameValue,
      email: emailValue,
      phone: phoneValue,
      program: programValue,
      image: imageValue,
      graduationYear: graduationYearValue,
      graduated: !graduatedValue,
    };

    props.setStudents((students) => {
      return [...students, newStudent];
    });

    //borrar formulario
    setFullNameValue("");
    setImageValue("");
    setPhoneValue("");
    setEmailValue("");
    setProgramValue("");
    setGraduationYearValue(2023);
    setGraduatedValue(false);
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullNameValue}
              onChange={handleFullNameChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={imageValue}
              onChange={handleImageChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={phoneValue}
              onChange={handlePhoneChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={emailValue}
              onChange={handleEmailChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={programValue}
              onChange={handleProgramChange}
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
              value={graduationYearValue}
              onChange={handleGraduationAgeChange}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={graduatedValue}
              onChange={handleGraduatedChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}

export default Addstudents;
