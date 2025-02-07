import { useState } from "react";

function AddStudent(props) {

    const [fullName, setFullName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [phone, setPhone] = useState("928-000-0000");
    const [email, setEmail] = useState("username@mail.com");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);


    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        const stateSetters = {
            fullName: setFullName,
            profileImage: setProfileImage,
            phone: setPhone,
            email: setEmail,
            program: setProgram,
            graduationYear: setGraduationYear,
            graduated: setGraduated,
        };

        stateSetters[name]?.(newValue);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newStudent = { fullName, profileImage, phone, email, program, graduationYear, graduated };

        console.log("Submitted: ", newStudent);
        props.addStudent(newStudent);

        // Reset the state
        setFullName("");
        setProfileImage("");
        setPhone("928-000-0000");
        setEmail("username@mail.com");
        setProgram("")
        setGraduationYear(2025)
        setGraduated(false)

    }

    return (
        <div className="AddStudent">

            {/* form will be added here */}

            {/* FORM */}
            <form onSubmit={handleSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleInputChange} />
                    </label>

                    <label>
                        Profile Image
                        <input name="profileImage" type="url" placeholder="Profile Image" value={profileImage} onChange={handleInputChange} />
                    </label>

                    <label>
                        Phone
                        <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handleInputChange} />
                    </label>

                    <label>
                        Email
                        <input name="email" type="email" placeholder="Email" value={email} onChange={handleInputChange} />
                    </label>
                </div>

                <div>
                    <label>
                        Program
                        <select name="program" value={program} onChange={handleInputChange}>
                            <option value="">-- None --</option>
                            <option value="Web Dev">Web Dev</option>
                            <option value="UXUI">UXUI</option>
                            <option value="Data">Data</option>
                        </select>
                    </label>

                    <label>
                        Graduation Year
                        <input value={graduationYear} onChange={handleInputChange}
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
                        <input name="graduated" type="checkbox" value={graduated} onChange={handleInputChange} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
            {/* FORM END */}

        </div>
    );
}

export default AddStudent;
