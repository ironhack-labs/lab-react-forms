import { useState } from "react";

const AddNewStudent = ({ addNewStudent }) => {


    const [fullName, setFullName] = useState('');
    const [image, setImage] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [program, setProgram] = useState('')
    const [graduated, setGraduated] = useState(false);

    const handleFullNameChange = event => {
        const { value } = event.target
        setFullName(value)
    }

    const handleImageChange = event => {
        const { value } = event.target
        setImage(value)
    }
    const handleEmailChange = event => {
        const { value } = event.target
        setEmail(value)
    }
    const handlePhoneChange = event => {
        const { value } = event.target
        setPhone(value)
    }
    const handleGraduatedChange = event => {
        const { checked } = event.target
        setGraduated(checked)
    }

    const handleProgramChange = event => {
        const { value } = event.target
        setProgram(value)
    }

    const handleFormSubmit = event => {
        event.preventDefault()
        const studentData = { fullName, image, phone, email, graduated, program }
        addNewStudent(studentData)
    }
    return (

        <form onSubmit={handleFormSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" onChange={handleFullNameChange} value={fullName} type="text" placeholder="Full Name" />
                </label>

                <label>
                    Profile Image
                    <input name="image" onChange={handleImageChange} value={image} type="url" placeholder="Profile Image" />
                </label>

                <label>
                    Phone
                    <input name="phone" onChange={handlePhoneChange} value={phone} type="tel" placeholder="Phone" />
                </label>

                <label>
                    Email
                    <input name="email" onChange={handleEmailChange} value={email} type="email" placeholder="Email" />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" onChange={handleProgramChange} value={program}>
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
                    />
                </label>

                <label>
                    Graduated
                    <input checked={graduated} onChange={handleGraduatedChange} name="graduated" type="checkbox" />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>
    )
}

export default AddNewStudent