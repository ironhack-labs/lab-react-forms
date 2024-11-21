import { useState } from "react";

function Form({students, setStudents}){
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("Web Dev");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    function handleSubmit(e) {
    e.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    setStudents([newStudent, ...students]);

    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
    setGraduated(false);


    }

    return (
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label htmlFor="fullName">
            Full Name
            <input
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
              name="fullName"
              type="text"
              placeholder="Full Name"
            />
          </label>

          <label htmlFor="image">
            Profile Image
            <input
              id="image"
              value={image}
              onChange={(e) => {
                setImage(e.target.value);
              }}
              name="image"
              type="url"
              placeholder="Profile Image"
            />
          </label>

          <label htmlFor="phone">
            Phone
            <input
              id="phone"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              name="phone"
              type="tel"
              placeholder="Phone"
            />
          </label>

          <label htmlFor="email">
            Email
            <input
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
        </div>

        <div>
          <label htmlFor="program">
            Program
            <select
              id="program"
              value={program}
              onChange={(e) => {
                setProgram(e.target.value);
              }}
              name="program"
            >
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UX UI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label htmlFor="graduationYear">
            Graduation Year
            <input
              id="graduationYear"
              value={graduationYear}
              onChange={(e) => {
                setGraduationYear(e.target.value);
              }}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label htmlFor="graduated">
            Graduated
            <input
              id="graduated"
              checked={graduated}
              onChange={(e) => {
                setGraduated(e.target.checked);
              }}
              name="graduated"
              type="checkbox"
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    );
}

export default Form;