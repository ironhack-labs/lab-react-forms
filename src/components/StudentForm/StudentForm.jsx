import { useState } from "react"

const StudentForm = ({ addNewStudent }) => {

    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [program, setProgram] = useState('')
    const [graduationYear, setGraduationYear] = useState(2023)
    const [graduated, setGraduated] = useState(false)

    const handleFullNameChange = (event) => {
        const { value } = event.target
        setFullName(value)
    }

    const handleImageChange = (event) => {
        const { value } = event.target
        setImage(value)
    }

    const handlePhoneChange = (event) => {
        const { value } = event.target
        setPhone(value)
    }

    const handleEmailChange = (event) => {
        const { value } = event.target
        setEmail(value)
    }

    const handleProgramChange = (event) => {
        const { value } = event.target
        setProgram(value)
    }

    const handleGraduationYearChange = (event) => {
        const { value } = event.target
        setGraduationYear(value)
    }

    const handleGraduatedChange = (event) => {
        const { checked } = event.target
        setGraduated(checked)
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const newStudent = {
            fullName,
            image,
            phone,
            email,
            program,
            graduationYear,
            graduated
        }
        addNewStudent(newStudent)
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" value={fullName} onChange={handleFullNameChange} type="text" placeholder="Full Name" />
                </label>

                <label>
                    Profile Image
                    <input name="image" value={image} onChange={handleImageChange} type="url" placeholder="Profile Image" />
                </label>

                <label>
                    Phone
                    <input name="phone" value={phone} onChange={handlePhoneChange} type="tel" placeholder="Phone" />
                </label>

                <label>
                    Email
                    <input name="email" value={email} onChange={handleEmailChange} type="email" placeholder="Email" />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program">
                        <option value={program} onChange={handleProgramChange} >-- None --</option>
                        <option value="Web Dev">Web Dev</option>
                        <option value="UXUI">UXUI</option>
                        <option value="Data">Data</option>
                    </select>
                </label>

                <label>
                    Graduation Year
                    <input
                        name="graduationYear"
                        value={graduationYear}
                        onChange={handleGraduationYearChange}
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
                    <input name="graduated" checked={graduated} onChange={handleGraduatedChange} type="checkbox" />
                </label>

                <button type="submit" >Add Student</button>
            </div>

        </form>

    )
}

export default StudentForm