import { useState } from "react";

function AddStudent(props) {
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    const handleFullNameInput = e => setFullName(e.target.value);
    const handleImageInput = e => setImage(e.target.value);
    const handlePhoneInput = e => setPhone(e.target.value);
    const handleEmailInput = e => setEmail(e.target.value);
    const handleProgramInput = e => setProgram(e.target.value);
    const handleGraduationYearInput = e => setGraduationYear(e.target.value);
    const handleGraduatedInput = e => setGraduated(e.target.checked);

    function submitForm(e) {
        let newStudent = {
            fullName: fullName,
            email: email,
            phone: phone,
            program: program,
            image: image,
            graduationYear: graduationYear,
            graduated: graduated,
        };
        e.preventDefault();
        props.handleAddStudent(newStudent);
    }

    return (
        <form onSubmit={submitForm}>
            <span>Add a Student</span>
            <div>
            <label>
                Full Name
                <input value={fullName} name = "fullName" type="text" placeholder="Full Name" onChange={handleFullNameInput} />
            </label>

            <label>
                Profile Image
                <input value={image} name="image" type="url" placeholder="Profile Image" onChange={handleImageInput}/>
            </label>

            <label>
                Phone
                <input value={phone} name="phone" type="tel" placeholder="Phone" onChange={handlePhoneInput}/>
            </label>

            <label>
                Email
                <input value={email} name="email" type="email" placeholder="Email" onChange={handleEmailInput}/>
            </label>
            </div>

            <div>
            <label>
                Program
                <select value={program} name="program" onChange={handleProgramInput}>
                <option value="">-- None --</option>
                <option value="Web Dev">Web Dev</option>
                <option value="UXUI">UXUI</option>
                <option value="Data">Data</option>
                </select>
            </label>

            <label>
                Graduation Year
                <input
                value = {graduationYear}
                name="graduationYear"
                type="number"
                placeholder="Graduation Year"
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
                onChange={handleGraduationYearInput}
                />
            </label>

            <label>
                Graduated
                <input checked={graduated} name="graduated" type="checkbox" onChange={handleGraduatedInput}/>
            </label>

            <button type="submit">Add Student</button>
            </div>

        </form>
    );
}

export default AddStudent;