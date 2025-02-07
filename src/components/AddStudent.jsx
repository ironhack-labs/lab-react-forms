import { useState } from "react";


function AddStudent(props) {

    // Simplifying useState() and handleInput

    const [data, setData] = useState({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        image: "",
        graduationYear: 2023,
        graduated: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;


         // Set checkbox state
        if (type === "checkbox") {
            setData(prevState => ({
                ...prevState,
                [name]: checked
            }));
        } else {
            setData(prevState => ({
                ...prevState,
                [name]: value
            }));
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        const newStudent = { ...data };

        props.setStudents([newStudent, ...props.students]);


        //  Reset form fields
        setData({
            fullName: "",
            email: "",
            phone: "",
            program: "",
            image: "",
            graduationYear: 2023,
            graduated: false
        });

    };



    return (
        <>

            {/* FORM */}
            <form onSubmit={handleFormSubmit}>
                <span>Add a Student</span>
                <div>
                    <label>
                        Full Name
                        <input name="fullName"
                            type="text"
                            placeholder="Full Name"
                            value={data.fullName}
                            onChange={handleInputChange} />
                    </label>

                    <label>
                        Profile Image
                        <input name="image"
                            type="url"
                            placeholder="Profile Image"
                            value={data.image}
                            onChange={handleInputChange} />
                    </label>

                    <label>
                        Phone
                        <input name="phone"
                            type="tel"
                            placeholder="Phone"
                            value={data.phone}
                            onChange={handleInputChange} />
                    </label>

                    <label>
                        Email
                        <input name="email"
                            type="email"
                            placeholder="Email"
                            value={data.email}
                            onChange={handleInputChange} />
                    </label>
                </div>
                <div>
                    <label>
                        Program
                        <select name="program" value={data.program} onChange={handleInputChange}>
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
                            value={data.graduationYear}
                            onChange={handleInputChange}
                        />
                    </label>

                    <label>
                        Graduated
                        <input name="graduated" type="checkbox" value={data.graduated} onChange={handleInputChange} />
                    </label>

                    <button type="submit">Add Student</button>
                </div>

            </form>
            {/* FORM END */}



        </>
    )
}

export default AddStudent;