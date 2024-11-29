import { useState } from "react";

const initialValue = {
    fullName: "",
    image: "",
    phone: "",
    program: "",
    email: "",
    graduationYear: 2023,
    graduated: false,
}

function AddStudent({ handleAddStudent }) {
    const [student, setStudent] = useState(initialValue);

    const handleChange = (event) => {
        if (event.target.type === "checkbox") console.log(event.target.checked);
        
        const value = event.target.type === "checkbox" 
        ? event.target.checked 
        :event.target.value;
        setStudent({
            ...student,
            [event.target.name] : value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddStudent(student);
        setStudent(initialValue);
    }
    return (
        <>
            <form onSubmit={() => handleSubmit(event)}>
                <span>Add a Student</span>
                <div>
                    {/* <p>{fullName}</p> */}
                    <label>
                        Full Name
                        <input value={student.fullName} onChange={handleChange} name="fullName" type="text" placeholder="Full Name" />
                    </label>
                    {/* <p>{image}</p> */}
                    <label>
                        Profile Image
                        <input value={student.image} onChange={handleChange} name="image" type="url" placeholder="Profile Image" />
                    </label>
                    {/* <p>{phone}</p> */}
                    <label>
                        Phone
                        <input value={student.phone} onChange={handleChange} name="phone" type="tel" placeholder="Phone" />
                    </label>
                    <label>
                        {/* <p>{email}</p> */}
                        Email
                    </label>
                    <input value={student.email} onChange={handleChange} name="email" type="email" placeholder="Email" />
                </div>

                <div>
                    {/* <p>{program}</p> */}
                    <label>
                        Program
                        <select value={student.program} onChange={handleChange} name="program">
                            <option value="">-- None --</option>
                            <option value="Web Dev">Web Dev</option>
                            <option value="UXUI">UXUI</option>
                            <option value="Data">Data</option>
                        </select>
                    </label>
                    {/* <p>{graduationYear}</p> */}
                    <label>
                        Graduation Year
                        <input value={student.graduationYear} onChange={handleChange}
                            name="graduationYear"
                            type="number"
                            placeholder="Graduation Year"
                            minLength={4}
                            maxLength={4}
                            min={2023}
                            max={2030}
                        />
                    </label>
                    {/* <p>{graduated ? "yes" :"no"}</p> */}
                    <label>
                        Graduated
                        <input checked={student.graduated} onChange={handleChange} name="graduated" type="checkbox" />
                    </label>

                    <button type="submit">Add Student</button>

                </div>

            </form>
        </>
    );
}

export default AddStudent;