import { useState } from 'react'

function AddStudent({ setStudents }) {
  const [statesValue, setSteStatesValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    image: '',
    graduationYear: 0,
    graduated: false,
  })
  const handleChange = (event) => {
    setSteStatesValues({
      fullName: event.target.value,
      email: event.target.value,
      phone: event.target.value,
      program: event.target.value,
      image: event.target.value,
      graduationYear: event.target.value,
      graduated: event.target.value,
    })
  }
  const handleAddsubmit = (event) => {
    event.preventDefault()

    setStudents((current) => {
      const clone = [...current, statesValue]
      return clone
    })
  }

  return (
    <form>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            onChange={handleChange}
            value={statesValue.fullName}
            name="fullName"
            type="text"
            placeholder="Full Name"
          />
        </label>

        <label>
          Profile Image
          <input
            onChange={handleChange}
            value={statesValue}
            name="image"
            type="url"
            placeholder="Profile Image"
          />
        </label>

        <label>
          Phone
          <input
            onChange={handleChange}
            value={statesValue.phone}
            name="phone"
            type="tel"
            placeholder="Phone"
          />
        </label>

        <label>
          Email
          <input
            onChange={handleChange}
            value={statesValue.email}
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
            onChange={handleChange}
            value={statesValue.program}
            name="program"
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
            onChange={handleChange}
            value={statesValue.graduationYear}
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
            onChange={handleChange}
            checked={statesValue.gradueValue}
            name="graduated"
            type="checkbox"
          />
        </label>

        <button onClick={handleAddsubmit} type="submit">
          Add Student
        </button>
      </div>
    </form>
  )
}

export default AddStudent
