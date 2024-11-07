import { useState } from "react"

const NewStudentForm = ({ addNewStudent }) => {

    const [fullName, setfullName] = useState('')
    const [image, setImage] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [program, setProgram] = useState('')
    const [graduationYear, setGraduationYear] = useState(0)
    const [graduated, setGraduated] = useState(false)

    const handleFullNameChange = e => {
        const { value } = e.target
        setfullName(value)
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
        const { value } = e.target
        setGraduated(value)
    }

    const handleFormSubmit = e => {
        e.preventDefault()
        const studentData = { fullName: fullName, image: image, phone: phone, email: email, program: program, graduationYear: graduationYear, graduated: graduated }
        addNewStudent(studentData)
    }

    return (

        <div className="NewStudentForm">
            <form onSubmit={handleFormSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" type="text" value={fullName} onChange={handleFullNameChange} placeholder="Full Name" />
                    </label>

                    <label>
                        Profile Image
                        <input name="image" type="url" value={image} onChange={handleImageChange} placeholder="Profile Image" />
                    </label>

                    <label>
                        Phone
                        <input name="phone" type="tel" value={phone} onChange={handlePhoneChange} placeholder="Phone" />
                    </label>

                    <label>
                        Email
                        <input name="email" type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
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
                            value={graduationYear}
                            onChange={handleGraduationYearChange}
                            placeholder="Graduation Year"
                            minLength={4}
                            maxLength={4}
                            min={2023}
                            max={2030}
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedChange} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
        </div>
    )
}

export default NewStudentForm