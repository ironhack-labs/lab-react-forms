import { useState } from "react";
import TableHeader from "./TableHeader";
import StudentCard from "./StudentCard";

function AddStudent({ handleSubmit, students }) {
  const [formData, setFormData] = useState({
    fullName: "",
    img: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: "",
    graduated: "",
  });

  const handleFormData = (e) => {
    const { name, value, checked, type } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      program: formData.program,
      graduationYear: formData.graduationYear,
      graduated: formData.graduated,
    };

    handleSubmit(e, newStudent);
  };
  return (
    <div>
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleFormData}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={formData.img}
              onChange={handleFormData}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleFormData}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleFormData}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={formData.program}
              onChange={handleFormData}
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
              value={formData.graduationYear}
              onChange={handleFormData}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={formData.graduated}
              onChange={handleFormData}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default AddStudent;
