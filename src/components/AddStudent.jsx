import { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {

    const [formData, setFormData] = useState({
        fullName: '',
        image: '',
        phone: '',
        email: '',
        program: '',
        graduationYear: 2023,
        graduated: false
    });

    const handleEvent = (event) => {
        if (event.target.name === "graduated") {
            const { name, checked } = event.target;
            setFormData({ ...formData, [name]: checked })
        } else {
            const { name, value } = event.target;
            setFormData({ ...formData, [name]: value })
        }
    };

    const resetFields = () => {
        setFormData({
            fullName: '',
            image: '',
            phone: '',
            email: '',
            program: '',
            graduationYear: 2023,
            graduated: false
        })
    }

    return (
        <form>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        onChange={handleEvent}
                        value={formData.fullName}
                    />
                </label>

                <label>
                    Profile Image
                    <input
                        name="image"
                        type="url"
                        placeholder="Profile Image"
                        value={formData.image}
                        onChange={handleEvent}
                    />
                </label>

                <label>
                    Phone
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleEvent}
                    />
                </label>

                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleEvent}
                    />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select
                        name="program"
                        value={formData.program}
                        onChange={handleEvent}
                    >
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
                        value={formData.graduationYear}
                        onChange={handleEvent}
                    />
                </label>

                <label>
                    Graduated
                    <input
                        name="graduated"
                        type="checkbox"
                        checked={formData.graduated}
                        onChange={handleEvent}
                    />
                </label>

                <button onClick={(event) => {
                    handleAddStudent(event, formData)
                    resetFields()
                }} type="submit">Add Student</button>
            </div>

        </form>
    )
}

export default AddStudent;