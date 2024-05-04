import { useState } from "react";
import StudentCard from "./StudentCard";


function NewStudentForm({ addNewStudent }) {
    const [fullName, setFullName] = useState("")
    const [profileImg, setProfileImage] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [program, setProgram] = useState("")
    const [graduationYear, setGraduationYear] = useState(2024)
    const [graduatedCondition, setGraduatedCondition] = useState(false)


    const handleNameChange = event => {
        const { value } = event.target
        setFullName(value)
    }

    const handleProfileImg = event => {
        const { value } = event.target
        setProfileImage(value)
    }

    const handlePhone = event => {
        const { value } = event.target
        setPhone(value)
    }

    const handleEmail = event => {
        const { value } = event.target
        setEmail(value)
    }

    const handleProgram = event => {
        const { value } = event.target
        setProgram(value)
    }

    const handleGraduationYear = event => {
        const { value } = event.target
        setGraduationYear(value)
    }

    const handleGraduatedCondition = event => {
        const { checked } = event.target
        setGraduatedCondition(checked)
    }

    const handleStudentSubmit = event => {
        event.preventDefault()
        const newStudent = {
            fullName: fullName,
            profileImg: profileImg,
            phone: phone,
            email: email,
            program: program,
            graduationYear: graduationYear,
            graduatedCondition: graduatedCondition
        }
        addNewStudent(newStudent)
    }


    return (

        <div className="NewStudentForm">
            < form onSubmit={handleStudentSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" type="text" value={fullName} onChange={handleNameChange} />
                    </label>

                    <label>
                        Profile Image
                        <input name="image" type="url" value={profileImg} onChange={handleProfileImg} />
                    </label>

                    <label>
                        Phone
                        <input name="phone" type="tel" value={phone} onChange={handlePhone} />
                    </label>

                    <label>
                        Email
                        <input name="email" type="email" value={email} onChange={handleEmail} />
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
                            value={graduationYear}
                            minLength={4}
                            maxLength={4}
                            min={2023}
                            max={2030}
                            onChange={handleGraduationYear}
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" type="checkbox" checked={graduatedCondition} onChange={handleGraduatedCondition} />
                    </label>


                    <button type="submit">Add Student</button>
                </div>

            </form >
        </div>
    )

}
export default NewStudentForm
{/* FORM END */ }

