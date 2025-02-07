import { useState } from "react";

export default function AddStudent({ addStudent }) {
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    const handleNameInput = e => setFullName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handlePhoneInput = e => setPhone(e.target.value);
    const handleEmailInput = e => setEmail(e.target.value);
    const handleProgramSelect = e => setProgram(e.target.value);
    const handleGraduationYearInput = e => setGraduationYear(e.target.value);

    const handleGraduatedInput = e => setGraduated(e.target.checked);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newStudent = { fullName, email, phone, program, image, graduationYear, graduated };
    
        {addStudent((newStudent))}
    
        setFullName("");
        setImage("");
        setPhone("");
        setEmail("");
        setProgram("");
        setGraduationYear(2023);
        setGraduated(false);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" type="text" value={fullName} onChange={handleNameInput} placeholder="Full Name" />
                </label>

                <label>
                    Profile Image
                    <input name="image" type="url" value={image} onChange={handleImageInput} placeholder="Profile Image" />
                </label>

                <label>
                    Phone
                    <input name="phone" type="tel" value={phone} onChange={handlePhoneInput} placeholder="Phone" />
                </label>

                <label>
                    Email
                    <input name="email" type="email" value={email} onChange={handleEmailInput} placeholder="Email" />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" value={program} onChange={handleProgramSelect}>
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
                        onChange={handleGraduationYearInput}
                        placeholder="Graduation Year"
                        minLength={4}
                        maxLength={4}
                        min={2023}
                        max={2030}
                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedInput} />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>
    );
}
