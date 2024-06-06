import useForm from "../customHook/useForm";

function AddStudent({ students, setStudents }) {
    const [student, handleFormData] = useForm({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        image: "",
        graduationYear: 2023,
        graduated: false,
    });

    const handleFormSubmit = (event) => {
        event.preventDefault();
        setStudents([...students, student]);
    };
    return (
        <form onSubmit={handleFormSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input
                        name="fullName"
                        type="text"
                        placeholder="Full Name"
                        value={student.fullName}
                        onChange={handleFormData}
                    />
                </label>

                <label>
                    Profile Image
                    <input
                        name="image"
                        type="url"
                        placeholder="Profile Image"
                        value={student.image}
                        onChange={handleFormData}
                    />
                </label>

                <label>
                    Phone
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone"
                        value={student.phone}
                        onChange={handleFormData}
                    />
                </label>

                <label>
                    Email
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={student.email}
                        onChange={handleFormData}
                    />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select
                        name="program"
                        value={student.program}
                        onChange={handleFormData}>
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
                        value={student.graduationYear}
                        onChange={handleFormData}
                    />
                </label>

                <label>
                    Graduated
                    <input
                        name="graduated"
                        type="checkbox"
                        checked={student.isGraduated}
                        onChange={handleFormData}
                    />
                </label>

                <button type="submit">Add Student</button>
            </div>
        </form>
    );
}

export default AddStudent;
