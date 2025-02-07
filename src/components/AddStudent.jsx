import { useState } from "react";

export default function AddStudent({ handleAddStudent }) {

    const [fullName, setFullName] = useState(" ");
    const [image, setImage] = useState(" ");
    const [phone, setPhone] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [program, setProgram] = useState(" ")
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    const handleInput = (e) => {
        const { name, type, value, checked } = e.target;

        if (type === "checkbox") {
            setGraduated(checked);
        } else {
            switch (name) {
                case "fullName":
                    setFullName(value);
                    break;
                case "image":
                    setImage(value);
                    break;
                case "phone":
                    setPhone(value);
                    break;
                case "email":
                    setEmail(value);
                    break;
                case "program":
                    setProgram(value);
                    break;
                case "graduationYear":
                    setGraduationYear(value);
                    break;
                default:
                    break;
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const newStudent = { fullName, image, phone, email, program, graduationYear, graduated }
        handleAddStudent(newStudent)

        setFullName(" ")
        setImage(" ")
        setPhone(" ")
        setEmail(" ")
        setProgram(" ")
        setGraduationYear(2023)
        setGraduated(false)
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" type="text" value={fullName} placeholder="Full Name" onChange={handleInput} />
                </label>

                <label>
                    Profile Image
                    <input name="image" type="url" value={image} placeholder="Profile Image" onChange={handleInput} />
                </label>

                <label>
                    Phone
                    <input name="phone" type="tel" value={phone} placeholder="Phone" onChange={handleInput} />
                </label>

                <label>
                    Email
                    <input name="email" type="email" value={email} placeholder="Email" onChange={handleInput} />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" value={program} onChange={handleInput}>
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
                        onChange={handleInput}
                        placeholder="Graduation Year"
                        minLength={4}
                        maxLength={4}
                        min={2023}
                        max={2030}
                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" type="checkbox" checked={graduated} onChange={handleInput} />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>
    )
}