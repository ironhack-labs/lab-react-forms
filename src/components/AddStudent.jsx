import { useState } from "react";

function AddStudent(props) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName: fullName,
      image: image,
      phone: phone,
      email: email,
      program: program,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    props.callbackToCreate(newStudent);

    setStudents(newArray);
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduated("");
    setGraduationYear("");
  };

  return (
    <section>
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
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={graduationYear}
              onChange={(e) => setGraduationYear(Number(e.target.value))}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              value={graduated}
              onChange={(e) => {
                setGraduated(e.target.checked);
              }}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </section>
  );
}
export default AddStudent;
