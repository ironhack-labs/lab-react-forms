import { useState } from "react";
import studentsData from "./../assets/students.json";

const Form = ({ addNewStudent }) => {

    //const [students, setStudents] = useState(studentsData);

    const [fullName, setFullName] = useState("")
    const [image, setProfileImage] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [program, setProgram] = useState("")
    const [graduationYear, setGraduationYear] = useState(2023)
    const [graduated, setGraduated] = useState(false)



    const handleFullNameChange = event => {
        const { value } = event.target
        setFullName(value)
    }

    const handleImageChange = event => {
        const { value } = event.target
        setProfileImage(value)
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
        event.preventDefault()              // Evita el envío
        const newStudent = { fullName: fullName, image: image, phone: phone, email: email, program: program, graduationYear: graduationYear, graduated: graduated }

        addNewStudent(newStudent)

    }


    return (
        <form onSubmit={handleStudentSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input type="text" name="fullName" value={fullName} onChange={handleFullNameChange} />
                </label>

                <label>
                    Profile Image
                    <input type="url" name="image" value={image} onChange={handleImageChange} />
                </label>

                <label>
                    Phone
                    <input ntype="tel" name="phone" value={phone} onChange={handlePhoneChange} />
                </label>

                <label>
                    Email
                    <input type="email" name="email" value={email} onChange={handleEmailChange} />
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
                        minLength={4}
                        maxLength={4}
                        min={2023}
                        max={2030}
                        onChange={handleGraduationYearChange}
                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedChange} />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>
    )
}

export default Form