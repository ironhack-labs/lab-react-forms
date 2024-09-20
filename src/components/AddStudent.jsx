import { useState } from "react";

function AddStudent(props) {
  const {students, setStudents}= props;

  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  });


  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = { ...formData, graduated: formData.graduated };

    setStudents((currentStateValue) => {
      const clone = [...currentStateValue];
      clone.unshift(newStudent);
      return clone;
    });
  };

  return (
    <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleInputChange} value={formData.fullName}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleInputChange} value={formData.image}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleInputChange} value={formData.phone}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleInputChange}value={formData.email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleInputChange} value={formData.program}>
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
              onChange={handleInputChange}
              value={formData.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleInputChange} value={formData.graduated}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
  )
}

export default AddStudent