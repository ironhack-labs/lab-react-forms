import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import TableHeader from './components/TableHeader'
import StudentCard from './components/StudentCard'

import studentsData from './assets/students.json'

const initialFormValues = {
  fullName: '',
  image: '',
  phone: '',
  email: '',
  program: '',
  graduationYear: 2023,
  graduated: false,
}

function App() {
  const [students, setStudents] = useState(studentsData)
  /*   const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false) */
  const [formValues, setFormValues] = useState(initialFormValues)

  const handleChange = event => {
    const currentName = event.target.name
    let currentValue = event.target.value

    if (event.target.type === 'number') {
      currentValue = parseInt(currentValue)
    }
    if (event.target.type === 'checkbox') {
      currentValue = event.target.checked
    }

    setFormValues({ ...formValues, [currentName]: currentValue })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(formValues)
    setStudents([...students, formValues])
    setFormValues(initialFormValues)
  }

  return (
    <div className='App pt-20'>
      <Navbar />

      {/* FORM */}
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
              onChange={handleChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name='image'
              type='url'
              placeholder='Profile Image'
              value={formValues.image}
              onChange={handleChange}
            />
          </label>

          <label>
            Phone
            <input
              name='phone'
              type='tel'
              placeholder='Phone'
              value={formValues.phone}
              onChange={handleChange}
            />
          </label>

          <label>
            Email
            <input
              name='email'
              type='email'
              placeholder='Email'
              value={formValues.email}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name='program' value={formValues.program} onChange={handleChange}>
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
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={formValues.graduationYear}
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input
              name='graduated'
              type='checkbox'
              checked={formValues.graduated}
              onChange={handleChange}
            />
          </label>

          <button type='submit'>Add Student</button>
        </div>
      </form>
      {/* FORM END */}

      {/* TABLE/LIST HEADER */}
      <TableHeader />

      {/* STUDENT LIST */}
      {students &&
        students.map(student => {
          return <StudentCard key={student.email} {...student} />
        })}
    </div>
  )
}

export default App