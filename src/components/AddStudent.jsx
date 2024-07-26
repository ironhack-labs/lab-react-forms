import { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {

  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  })

  const handleInputChange = event => {

    const { name, value } = event.target

    setFormData({
      ...formData,
      [name]: name === "checkbox" ? event.target.checked : value
    })

  }

  const handleSubmitForm = event => {
    event.preventDefault()
    handleAddStudent(formData)
  }

  return (

    <form onSubmit={handleSubmitForm}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input onChange={handleInputChange} name="fullName" type="text" placeholder="Full Name" value={formData.fullName} />
        </label>

        <label>
          Profile Image
          <input onChange={handleInputChange} name="image" type="url" placeholder="Profile Image" value={formData.image} />
        </label>

        <label>
          Phone
          <input onChange={handleInputChange} name="phone" type="tel" placeholder="Phone" value={formData.phone} />
        </label>

        <label>
          Email
          <input onChange={handleInputChange} name="email" type="email" placeholder="Email" value={formData.email} />
        </label>
      </div>

      <div>
        <label>
          Program
          <select onChange={handleInputChange} name="program" value={formData.program}>
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input onChange={handleInputChange}
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={formData.graduationYear} />

        </label>

        <label>
          Graduated
          <input onChange={handleInputChange} name="graduated" type="checkbox" value={formData.graduated} />
        </label>

        <button type="submit">Add Student</button>
      </div>

    </form >


  )
}

export default AddStudent