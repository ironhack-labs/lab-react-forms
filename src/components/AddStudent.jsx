import { useState } from "react";

const firstState = {
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "",
        graduationYear: "",
        graduated: false
      }

function AddStudent({ handleAddStudent}) {
  const [student, setStudent] = useState(firstState);

  const handleChange = (event) => {
    const {name, value, type, checked} = event.target;
    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const newStudent ={
      fullName: student.fullName,
      image: student.image,
      phone: student.phone,
      email: student.email,
      program: student.program,  
      graduationYear: student.graduationYear,
      graduated: student.graduated
    }
    handleAddStudent(newStudent)
    setStudent(firstState)
  
  }

return (
      <form method="post" onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
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
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>

)}

export default AddStudent
