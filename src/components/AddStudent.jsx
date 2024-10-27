import { useState } from "react";

function AddStudent(props) {


    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("Web Dev");
    const [graduationYear, setGraduationYear] = useState(2024);
    const [graduated, setGraduated] = useState(false);

    const handleFullNameInput = (e) => setFullName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handlePhoneInput = (e) => setPhone(e.target.value);
    const handleEmailInput = (e) => setEmail(e.target.value);
    const handleProgramInput = (e) => setProgram(e.target.value);
    const handleGraduationYearInput = (e) => setGraduationYear(e.target.value);
    const handleGraduatedInput = (e) => setGraduated(e.target.checked);

    const handleSubmit = (e) => {

        e.preventDefault();
    
        const newStudent = { fullName, image, phone, email, program, graduationYear, graduated };
            
        props.handleAddStudent(newStudent);

        //reset the state
        setFullName("");
        setImage("");
        setPhone("");
        setEmail("");
        setProgram("Web dev");
        setGraduationYear(2024);
        setGraduated(false);
    };



    return (

        <>

            {/* FORM */}
            <form onSubmit={handleSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleFullNameInput} required/>
                    </label>

                    <label>
                        Profile Image
                        <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleImageInput} required/>
                    </label>

                    <label>
                        Phone
                        <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handlePhoneInput} required/>
                    </label>

                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" value={email} onChange={handleEmailInput} required/>
                    </label>
                </div>

                <div>
                    <label>
                        Program
                        <select name="program" value={program} onChange={handleProgramInput} required>
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
                            value={graduationYear}
                            onChange={handleGraduationYearInput}
                            required
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduatedInput} required/>
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
            {/* FORM END */}
        </>
    )

}

export default AddStudent;