import { useState } from "react";

function AddStudent({ students, setStudents }) {
    // Estado inicial para el formulario
    const initialState = {
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "-- None --",
        graduationYear: 2023,
        graduated: false,
    }

    const [addStudent, setAddStudent] = useState(initialState)

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setAddStudent({
        ...addStudent,
        [name]: type === "checkbox" ? checked : value,  // Con [name], defines qué propiedad del objeto addStudent se debe actualizar
        // decide si usar el valor de checked o value basado en el tipo del campo del formulario (type)
        });
    };

    const handleAddStudent = (e) => {
        e.preventDefault();
        
        setStudents([addStudent, ...students]);
        
        // Limpiar el formulario
        setAddStudent(initialState);
    }

    return (
        <form onSubmit={handleAddStudent}>
            <span>Add a Student</span>
            <div>
            <label>
                Full Name
                <input name="fullName" type="text" placeholder="Full Name" value={addStudent.fullName} onChange={handleInputChange} />
            </label>

            <label>
                Profile Image
                <input name="image" type="url" placeholder="Profile Image" value={addStudent.image} onChange={handleInputChange} />
            </label>

            <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone" value={addStudent.phone} onChange={handleInputChange} />
            </label>

            <label>
                Email
                <input name="email" type="email" placeholder="Email" value={addStudent.email} onChange={handleInputChange} />
            </label>
            </div>

            <div>
            <label>
                Program
                <select name="program" value={addStudent.program} onChange={handleInputChange} >
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
                value={addStudent.graduationYear}
                onChange={handleInputChange}
                />
            </label>

            <label>
                Graduated
                <input name="graduated" type="checkbox" checked={addStudent.graduated} onChange={handleInputChange} />
            </label>

            <button type="submit" >Add Student</button>
            </div>

        </form>
    )
}

export default AddStudent;