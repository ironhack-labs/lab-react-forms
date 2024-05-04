import { useState } from "react";

const NewStudentForm = ({ addNewStudent }) => {

  const [fullName, setFullName] = useState('')
  const [image, setImage] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [program, setProgram] = useState('')
  const [graduationYear, setGraduationYear] = useState(2023)
  const [graduated, setGraduated] = useState(false)


  const handleFullNameChange = event => {
    const { value } = event.target
    setFullName(value)
  }

  const handleImageChange = event => {
    const { value } = event.target
    setImage(value)
  }

  const handlePhoneChange = event => {
    const { value } = event.target
    setPhone(value)
  }

  const handleEmailChange = event => {
    const { value } = event.target
    setEmail(value)
  }

  const handleProgramChange = event => {
    const { value } = event.target
    setProgram(value)
  }

  const handleGraduationYearChange = event => {
    const { value } = event.target
    setGraduationYear(value)
  }

  const handleGraduatedChange = event => {
    const { checked } = event.target
    setGraduated(checked)
  }

  const handleStudentSubmit = event => {
    event.preventDefault()
    const newStudent = { fullName: fullName, image: image, phone: phone, email: email, program: program, graduationYear: graduationYear, graduated: graduated }
    addNewStudent(newStudent)
  }

  return (
    <div className="NewStudentForm">
      {/* FORM */}
      < form onSubmit={handleStudentSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImageChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneChange} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgramChange}>
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
              value={graduationYear}
              onChange={handleGraduationYearChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedChange} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form >
      {/* FORM END */}
    </div>
  )
}
export default NewStudentForm