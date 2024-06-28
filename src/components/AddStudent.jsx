import { useState } from "react";

const AddStudent = ({ handleAddStudent }) => {

    // state for each input field
    const [newStudentInput, setNewStudentInput] = useState({
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "",
        graduationYear: 2023,
        graduated: false,
    });

    // reset state of input fields
    const resetState = () => {
        setNewStudentInput({
            fullName: "",
            image: "",
            phone: "",
            email: "",
            program: "",
            graduationYear: 2023,
            graduated: false,
        });
    }

    // change state of targetted input value 
    const handleInput = (event) => {
        const {name, type, value, checked } = event.target;
        setNewStudentInput((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }));
    }

    // prevent default, add student, reset state
    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddStudent(newStudentInput);
        resetState();
    }

    return (
        <form onSubmit={handleSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                Full Name
                <input name="fullName" type="text" placeholder="Full Name" required
                    value={newStudentInput.fullName} onChange={handleInput}
                />
                </label>

                <label>
                Profile Image
                <input name="image" type="url" placeholder="Profile Image" required
                    value={newStudentInput.image} onChange={handleInput}
                />
                </label>

                <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone" required
                    value={newStudentInput.phone} onChange={handleInput}
                />
                </label>

                <label>
                Email
                <input name="email" type="email" placeholder="Email" required
                    value={newStudentInput.email} onChange={handleInput}
                />
                </label>
            </div>

            <div>
                <label>
                Program
                <select name="program" value={newStudentInput.program} onChange={handleInput} required>
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
                    value={newStudentInput.graduationYear}
                    onChange={handleInput}
                />
                </label>

                <label>
                Graduated
                <input name="graduated" type="checkbox" 
                    checked={newStudentInput.graduated}
                    onChange={handleInput}
                />
                </label>

                <button type="submit">Add Student</button>
            </div>
        </form>
    )
}

export default AddStudent;