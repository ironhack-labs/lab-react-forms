import React from 'react';
import { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
    const [fullName, setFullName] = useState('');
    const [image, setimage] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [program, setProgram] = useState('None');
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    const handleNameInput = (e) => setFullName(e.target.value);
    const handleImageInput = (e) => setimage(e.target.value);
    const handlePhoneInput = (e) => setPhone(e.target.value);
    const handleMailInput = (e) => setEmail(e.target.value);
    const handleProgramInput = (e) => setProgram(e.target.value);
    const handlYearInput = (e) => setGraduationYear(parseInt(e.target.value));
    const handleGraduateInput = () => graduated ? setGraduated(false) : setGraduated(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { fullName: fullName, email: email, phone: phone, program: program, image: image, graduationYear: graduationYear, graduated: graduated };
        handleAddStudent(student);

        //reset state
        setFullName('');
        setEmail('');
        setPhone('');
        setProgram('');
        setimage('');
        setGraduationYear('');
        setGraduated(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <span>Add a Student</span>
            <div>
                <label>
                    Full Name
                    <input name="fullName" required value={fullName} onChange={handleNameInput} type="text" placeholder="Full Name" />
                </label>

                <label>
                    Profile Image
                    <input name="image" value={image} onChange={handleImageInput} type="url" placeholder="Profile Image" />
                </label>

                <label>
                    Phone
                    <input name="phone" value={phone} onChange={handlePhoneInput} type="tel" placeholder="Phone" />
                </label>

                <label>
                    Email
                    <input name="email" value={email} onChange={handleMailInput} type="email" placeholder="Email" />
                </label>
            </div>

            <div>
                <label>
                    Program
                    <select name="program" value={program} onChange={handleProgramInput}>
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
                        value={graduationYear}
                        onChange={handlYearInput}
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
                    <input name="graduated" type="checkbox" checked={graduated} onChange={handleGraduateInput} />
                </label>

                <button type="submit" >Add Student</button>
            </div>

        </form>
    );
};

export default AddStudent;