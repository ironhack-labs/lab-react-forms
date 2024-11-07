import { useState } from "react";
import studentsData from "../../assets/students.json";
import StudentCard from "../StudentCard"

const NewStudentForm = ({ addNewStudent }) => {
    const [students, setStudents] = useState(studentsData);
    const [fullName, setFullName] = useState('')
    const [image, setImage] = useState('')
    const [phone, setPhone] = useState(0)
    const [email, setEmail] = useState('')
    const [program, setProgram] = useState('')
    const [graduationYear, setGraduationYear] = useState(0)
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

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newStudent = {
            fullName,
            email,
            phone,
            program,
            image,
            graduationYear: parseInt(graduationYear, 10),
            graduated,
        };

        setStudents([...students, newStudent]);


        setFullName('');
        setEmail('');
        setPhone('');
        setProgram('');
        setImage('');
        setGraduationYear('');
        setGraduated(false);
    };

    return (
        <div className="NewStudentForm">

            <form onSubmit={handleFormSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" type="text" value={fullName} onChange={handleFullNameChange} />
                    </label>

                    <label>
                        Profile Image
                        <input name="image" type="url" value={image} onChange={handleImageChange} />
                    </label>

                    <label>
                        Phone
                        <input name="phone" type="number" value={phone} onChange={handlePhoneChange} />
                    </label>

                    <label>
                        Email
                        <input name="email" type="text" value={email} onChange={handleEmailChange} />
                    </label>
                </div>

                <div>
                    <label>
                        Program

                        <select name="program" type="text" value={program} onChange={handleProgramChange}>
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
                            value={graduationYear} onChange={handleGraduationYearChange}
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedChange} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
            {students &&
                students.map((student) => {
                    return <StudentCard key={student.email} {...student} />;
                })}
        </div>
    )
}

export default NewStudentForm