import { useState } from "react"

const AddStudent = ({handleSubmit}) => {

    const [newStudent, setNewStudent] = useState({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        image: "https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg",
        graduationYear: 2024,
        graduated: false
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        console.log("Student ===>", newStudent)
        setNewStudent(prevStudent => {
            return {
                ...prevStudent,
                [name]: type === "checkbox" ? checked : type === "number" ? Number(value) : value
            }
        })
    }

    const handelFormSubmit = (e) => {
        e.preventDefault()
        handleSubmit(newStudent)
        setNewStudent({
            fullName: "",
            email: "",
            phone: "",
            program: "",
            image: "https://cvhrma.org/wp-content/uploads/2015/07/default-profile-photo.jpg",
            graduationYear: 2024,
            graduated: false
        })
    }

  return (
    <form onSubmit={handelFormSubmit}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} value={newStudent.fullName}/>
      </label>

      <label>
        Profile Image
        <input name="image" type="url" placeholder="Profile Image" onChange={handleChange} value={newStudent.image}/>
      </label>

      <label>
        Phone
        <input name="phone" type="tel" placeholder="Phone" onChange={handleChange} value={newStudent.phone}/>
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="Email" onChange={handleChange} value={newStudent.email}/>
      </label>
    </div>

    <div>
      <label>
        Program
        <select name="program" onChange={handleChange}>
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
          onChange={handleChange}
          value={newStudent.graduationYear}
        />
      </label>

      <label>
        Graduated
        <input name="graduated" type="checkbox" onChange={handleChange} value={newStudent.graduated} />
      </label>

      <button type="submit">Add Student</button>
    </div>

  </form>
  )
}

export default AddStudent