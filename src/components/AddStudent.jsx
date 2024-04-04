import { useState } from "react";

const AddStudent = (props) => {
  const [studentInfo, setStudentInfo] = useState({
    fullName: "",
    image: "",
    phone: 1234567,
    email: "",
    program: "-- None --",
    graduationYear: 2023,
    graduated: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStudentInfo({
      ...studentInfo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted", studentInfo);
    props.addStudent(studentInfo);

    setStudentInfo({
      fullName: "",
      image: "",
      phone: 1234567,
      email: "",
      program: "-- None --",
      graduationYear: 2023,
      graduated: false,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={studentInfo.fullName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={studentInfo.image}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={studentInfo.phone}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={studentInfo.email}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={studentInfo.program}
              onChange={handleInputChange}
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
              value={studentInfo.graduationYear}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={studentInfo.graduated}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </>
  );
};

export default AddStudent;
