
import { useState } from "react";

const initialForm = {
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
};

function AddStudent({ addStudent }) {

    const [form, setForm] = useState(initialForm);

    const handleSubmit = (e) => {
        e.preventDefault();

        addStudent(form);

        setForm(initialForm);

    }

    function handleChange(e) {
        const { name, value, type, checked } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value
        }));
    }

    return (
        <>{/* FORM */}
            <form onSubmit={handleSubmit}>
                <span>Add a Student</span>
                <div>
                <label>
                    Full Name
                    <input name="fullName" type="text" placeholder="Full Name" value={form.fullName} onChange={handleChange}/>
                </label>

                <label>
                    Profile Image
                    <input name="image" type="url" placeholder="Profile Image" value={form.image} onChange={handleChange}/>
                </label>

                <label>
                    Phone
                    <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange}/>
                </label>

                <label>
                    Email
                    <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
                </label>
                </div>

                <div>
                <label>
                    Program
                    <select name="program" value={form.program} onChange={handleChange}>
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
                    value={form.graduationYear}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Graduated
                    <input name="graduated" type="checkbox" checked={form.graduated} onChange={handleChange}/>
                </label>

                <button type="submit">Add Student</button>
                </div>
            </form>
        {/* FORM END */}
        </>
    );
}

export default AddStudent;