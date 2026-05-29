import { useState } from "react";
export const Form = ({ onAddStudent: addStudent }) => {
    const initialStateForm = {
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "",
        graduationYear: 2023,
        graduated: false
    }

    const [stateForm, setStateForm] = useState(initialStateForm)

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ?
            e.target.checked : e.target.value
        setStateForm(
            {
                ...stateForm,
                [e.target.name]: value
            }
        )
    }

    const handleAddStudent = (e) => {
        e.preventDefault()
        const newStudent = stateForm
        addStudent(newStudent)
        setStateForm(initialStateForm)
    }

    return (
        < form onSubmit={handleAddStudent} >
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={stateForm.fullName}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Profile Image
                    <input
                        name="image"
                        type="url"
                        placeholder="Profile Image"
                        value={stateForm.image}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Phone
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={stateForm.phone}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={stateForm.email}
                        onChange={handleChange}
                    />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select
                        name="program"
                        value={stateForm.program}
                        onChange={handleChange}
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
                        value={stateForm.graduationYear}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Graduated
                    <input
                        name="graduated"
                        type="checkbox"
                        checked={stateForm.graduated}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Add Student</button>
            </div>
        </form >
    )
}