import { useState } from "react"


const StudentAdd = ({ addNewStudent }) => {

  const [fullName, setFullName] = useState("")
  const [profileImage, setProfileImage] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [program, setProgram] = useState("")
  const [graduationYear, setGraduationYear] = useState(0)
  const [isGraduated, setIsGraduated] = useState(false)

  const handleFullNameChange = e => {
    const { value } = e.target
    setFullName(value)
  }

  const handleProfileImage = e => {
    const { value } = e.target
    setProfileImage(value)
  }

  const handlePhone = e => {
    const { value } = e.target
    setPhone(value)
  }

  const handleEmail = e => {
    const { value } = e.target
    setEmail(value)
  }

  const handleProgram = e => {
    const { value } = e.target
    setProgram(value)
  }

  const handleGraduationYear = e => {
    const { value } = e.target
    setGraduationYear(value)
  }

  const handleIsGraduated = e => {
    const { checked } = e.target
    setIsGraduated(checked)
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    const newStudentData = {
      fullName: fullName, email: email, phone: phone, program: program, image: profileImage,
      graduated: isGraduated, graduationYear: graduationYear
    }
    addNewStudent(newStudentData)
  }


  return (
    <div className="StudentAdd">
      <form onSubmit={handleSubmitForm}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" onChange={handleFullNameChange} />
          </label>

          Profile Image
          <label>
            <input name="image" type="url" placeholder="Profile Image" onChange={handleProfileImage} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handlePhone} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleEmail} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleProgram}>
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
              onChange={handleGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleIsGraduated} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
    </div>
  )
}

export default StudentAdd