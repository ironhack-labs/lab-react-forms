import { useState } from 'react'

const AddStudentForm = props => {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    phone: '',
    program: '',
    image: '',
    graduationYear: 2024,
    graduated: false
  })

  const handleInputChange = e => {
    const { name, value, type, checked } = e.target
    setFormValues({
      ...formValues,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newStudentObj = { ...formValues }
    props.callBacktoAddStudent(newStudentObj)

    setFormValues({
      fullName: '',
      email: '',
      phone: '',
      program: '',
      image: '',
      graduationYear: 2024,
      graduated: false
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <span>Add a Student</span>

      <div>
        <label>
          Full Name
          <input
            name='fullName'
            type='text'
            placeholder='Full Name'
            value={formValues.fullName}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Profile Image
          <input
            name='image'
            type='url'
            placeholder='Profile Image'
            value={formValues.image}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Phone
          <input
            name='phone'
            type='tel'
            placeholder='Phone'
            value={formValues.phone}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Email
          <input
            name='email'
            type='email'
            placeholder='Email'
            value={formValues.email}
            onChange={handleInputChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name='program'
            value={formValues.program}
            onChange={handleInputChange}
          >
            <option value=''>-- None --</option>
            <option value='Web Dev'>Web Dev</option>
            <option value='UXUI'>UXUI</option>
            <option value='Data'>Data</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name='graduationYear'
            type='number'
            placeholder='Graduation Year'
            min='2023'
            max='2030'
            value={formValues.graduationYear}
            onChange={handleInputChange}
          />
        </label>

        <label>
          Graduated
          <input
            name='graduated'
            type='checkbox'
            checked={formValues.graduated}
            onChange={handleInputChange}
          />
        </label>

        <button type='submit'>Add Student</button>
      </div>
    </form>
  )
}

export default AddStudentForm
