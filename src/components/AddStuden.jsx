import { useState } from "react";


const AddStudent = ({ handleAddStuden, students }) => {


    const newStudentsData = {
        fullName: '',
        image: '',
        phone: '',
        email: '',
        program: '',
        graduationYear: 0,
        graduated: false
    }

    const [data, setData] = useState(newStudentsData);

    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        setData({ ...data, [name]: type === 'checkbox' ? checked : value });
    }

    const handleFormSubmit = (event) => {
        event.preventDefault()
        handleAddStuden([data, ...students])
    }

    return (
        <div>
            {/* FORM */}
            <form onSubmit={handleFormSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input id="fullName" name="fullName" type="text" placeholder="Full Name" value={data.fullName} onChange={handleChange} />
                    </label>

                    <label>
                        Profile Image
                        <input id="image" name="image" type="url" placeholder="Profile Image" value={data.image} onChange={handleChange} />
                    </label>

                    <label>
                        Phone
                        <input id='phone' name="phone" type="tel" placeholder="Phone" value={data.phone} onChange={handleChange} />
                    </label>

                    <label>
                        Email
                        <input id="email" name="email" type="email" placeholder="Email" value={data.email} onChange={handleChange} />
                    </label>
                </div>

                <div>
                    <label>
                        Program
                        <select id="program" name="program" value={data.program} onChange={handleChange}>
                            <option value="">-- None --</option>
                            <option value="Web Dev">Web Dev</option>
                            <option value="UXUI">UXUI</option>
                            <option value="Data">Data</option>
                        </select>
                    </label>

                    <label>
                        Graduation Year
                        <input
                            id="graduationYear"
                            name="graduationYear"
                            type="number"
                            placeholder="Graduation Year"
                            minLength={4}
                            maxLength={4}
                            min={2023}
                            max={2030}
                            value={data.graduationYear}
                            onChange={handleChange}
                        />
                    </label>

                    <label>
                        Graduated
                        <input id="graduated" name="graduated" type="checkbox" value={data.graduated} onChange={handleChange} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
            {/* FORM END */}

        </div>
    )
}

export default AddStudent