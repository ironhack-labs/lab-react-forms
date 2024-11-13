import { useState } from "react";

function AddStudent({students, setStudents}) {
    const [text, setText] = useState("");
    const [url, setUrl] = useState("");
    const [tel, setTel] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [graduated, setGraduated] = useState(false);
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(0);

    const handleText = (e) => setText(e.target.value)
    const handleUrl = (e) => setUrl(e.target.value);
    const handleTel = (e) => setTel(e.target.value);
    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);
    const handleGraduated = (e) => setGraduated(e.target.checked);
    const handleProgram = (e) => setProgram(e.target.value);
    const handleGraduationYear = (e) => setGraduationYear(e.target.value);

    function createObject() {
        const obj = {
            fullName: text,
            email: email,
            phone: tel,
            program: program,
            image: url,
            graduationYear: graduationYear,
            graduated: graduated,
        }
        return obj;
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        const array = [...students]
        array.push(createObject());
        setStudents(array);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" type="text" placeholder="Full Name" onChange={handleText} />
                </label>

                <label>
                    Profile Image
                    <input name="image" type="url" placeholder="Profile Image" onChange={handleUrl} />
                </label>

                <label>
                    Phone
                    <input name="phone" type="tel" placeholder="Phone" onChange={handleTel} />
                </label>

                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" onChange={handleEmail} />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" onChange={handleProgram}>
                        <option value="" defaultChecked={true} >-- None --</option>
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
                        onChange={handleGraduationYear}
                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" type="checkbox" onChange={handleGraduated} />
                </label>

                <button type="submit">Add Student</button>
            </div>

        </form>
    );
}

export default AddStudent;
