import { useState } from "react"

function AddStudents(props) {   // Por props recibo la función del onSubmit
  // Variables de estado para cada input
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  })

  // Evento onSubmit
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newStudent = {...formData}

    props.handleAddStudent(newStudent)
    resetForm();
  }

  const resetForm = () => {
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false,
    })
  }

  // Único evento con el que manejar todos los inputs
  const handleChange = (e) => {
    const input = e.target            // Tipo de input y todas sus propiedades
    const inputName = input.name      // Nombre del input (fullName, email..)
    
    // Saber si es tipo checkbox:
    let inputValue;
    input.type === "checkbox" ? inputValue = input.checked : inputValue = input.value

    setFormData({
      ...formData,
      [inputName]: inputValue,
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input value={formData.fullName} onChange={handleChange} name="fullName" type="text" placeholder="Full Name" />
        </label>

        <label>
          Profile Image
          <input value={formData.image} onChange={handleChange} name="image" type="url" placeholder="Profile Image" />
        </label>

        <label>
          Phone
          <input value={formData.phone} onChange={handleChange} name="phone" type="tel" placeholder="Phone" />
        </label>

        <label>
          Email
          <input value={formData.email} onChange={handleChange} name="email" type="email" placeholder="Email" />
        </label>
      </div>

      <div>
        <label>
          Program
          <select value={formData.program} onChange={handleChange} name="program">
            <option value="">-- None --</option>
            <option value="Web Dev">Web Dev</option>
            <option value="UXUI">UXUI</option>
            <option value="Data">Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            value={formData.graduationYear}
            onChange={handleChange} 
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
          <input checked={formData.graduated} onChange={handleChange} name="graduated" type="checkbox" />
        </label>

        <button type="submit">Add Student</button>
      </div>

    </form>
  
  )
}

export default AddStudents