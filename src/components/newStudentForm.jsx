import { useState } from 'react'

const NewStudentForm = ({addNewStudent}) => {

    
  const [fullName, setFullName] = useState('')
  const hadleFullName = e => {
    const {value} = e.target
    setFullName(value)
  }

  const [image, setImage] = useState('')
  const hadleImage = e => {
    const {value} = e.target
    setImage(value)
  }

  const [phone, setPhone] = useState('')
  const handlePhone = e => {
    const {value} = e.target
    setPhone(value)
  }

  const [email, setEmail] = useState('')
  const handleEmail = e => {
    const {value} = e.target
    setEmail(value)
  }

  const [program, setProgram] = useState('')
  const handleProgram = e => {
    const {value} = e.target
    setProgram(value)
  }
  
  const [graduationYear, setGraduationYear] = useState(2023)
  const handleGraduationYear = e => {
    const {value} = e.target
    setGraduationYear(value)
  }

  const [graduated, setGraduated] = useState(false)
  const handleGraduated = e => {
    const {checked} = e.target
    setGraduated(checked)
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    const newStudent = {
      fullName:fullName, 
      email:email, 
      phone: phone,
      program:program,
      image:image,
      graduationYear:graduationYear, 
      graduated:graduated, 
    }
    addNewStudent(newStudent)
  }
  

    return (
        <div className="NewStudentForm">
            <form onSubmit={handleFormSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={hadleFullName} />
                    </label>

                    <label>
                        Profile Image
                        <input name="image" type="url" placeholder="Profile Image" value={image} onChange={hadleImage} />
                    </label>

                    <label>
                        Phone
                        <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhone} />
                    </label>

                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmail} />
                    </label>
                </div>

                <div>
                    <label>
                        Program
                        <select name="program" value={program} onChange={handleProgram}>
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
                            onChange={handleGraduationYear}
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduated} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
        </div>
    )

}

export default NewStudentForm