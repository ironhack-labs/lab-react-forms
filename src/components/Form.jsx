import { useState } from "react"

export default function Form({ students, setStudents }) {
  const [newStudent, setNewStudent] = useState({
    fullName: "",
    image: "",
    phone: 0,
    email: "",
    program: "",
    graduationYear: 0,
    graduated: false,
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    setStudents([...students, newStudent])
    // setStudents((prev) => [...prev, newStudent])
  }

  const handleChange = (e) => {
    if (e.target.name === "graduated") {
      setNewStudent((prev) => ({ ...prev, [e.target.name]: e.target.checked }))
    } else {
      setNewStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={newStudent.fullName}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={newStudent.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={newStudent.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={newStudent.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={handleChange}
            value={newStudent.program}
          >
            <option value="" hidden>
              -- None --
            </option>
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
            onChange={handleChange}
            value={newStudent.graduationYear}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            onChange={handleChange}
            checked={newStudent.graduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  )
}