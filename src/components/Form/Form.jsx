import { useState } from "react"
import "./Form.css"

const Form = ({ addNewStudent }) => {


    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [program, setProgram] = useState('None')
    const [graduationYear, setGraduationYear] = useState(2023)
    const [graduated, setGraduated] = useState(false)

    const handleFullNameChange = e => {
        const { value } = e.target
        setFullName(value)
    }

    const handleImageChange = e => {
        const { value } = e.target
        setImage(value)
    }

    const handlePhoneChange = e => {
        const { value } = e.target
        setPhone(value)
    }

    const handleEmailChange = e => {
        const { value } = e.target
        setEmail(value)
    }

    const handleProgramChange = e => {
        const { value } = e.target
        setProgram(value)
    }

    const handleGraduationYearChange = e => {
        const { value } = e.target
        setGraduationYear(value)
    }

    const handleGraduatedChange = e => {
        const { checked } = e.target
        setGraduated(checked)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const studentData = { fullName: fullName, email: email, phone: phone, program: program, image: image, graduated: graduated, graduationYear: graduationYear }
        addNewStudent(studentData)
    }



    return (
        <div className="Form">
            < form onSubmit={(handleFormSubmit)}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" value={fullName} type="text" placeholder="Full Name" onChange={(handleFullNameChange)} />
                    </label>

                    <label>
                        Profile Image
                        <input name="image" value={image} type="url" placeholder="Profile Image" onChange={(handleImageChange)} />
                    </label>

                    <label>
                        Phone
                        <input name="phone" value={phone} type="tel" placeholder="Phone" onChange={(handlePhoneChange)} />
                    </label>

                    <label>
                        Email
                        <input name="email" value={email} type="email" placeholder="Email" onChange={(handleEmailChange)} />
                    </label>
                </div>

                <div>
                    <label>
                        Program
                        <select name="program" value={program} onChange={(handleProgramChange)}>
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
                            value={graduationYear}
                            type="number"
                            placeholder="Graduation Year"
                            minLength={4}
                            maxLength={4}
                            min={2023}
                            max={2030}
                            onChange={(handleGraduationYearChange)}
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" checked={graduated} type="checkbox" onChange={(handleGraduatedChange)} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form >
        </div>
    )
}

export default Form
