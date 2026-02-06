import React from 'react'
import { useState } from "react";

function AddStudent({ handleAddStudent }) {

    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState(0);
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);

    const handleOnChange = (event) => {
        if (event.target.name === "fullName") {
            setFullName(event.target.value)
        } else if (event.target.name === "image") {
            setImage(event.target.value)
        } else if (event.target.name === "phone") {
            setPhone(event.target.value)
        } else if (event.target.name === "email") {
            setEmail(event.target.value)
        } else if (event.target.name === "program") {
            setProgram(event.target.value)
        } else if (event.target.name === "graduationYear") {
            setGraduationYear(event.target.value)
        } else if (event.target.name === "graduated") {
            setGraduated(event.target.value)
        }
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const newStudent = {
        fullName: fullName,
        image: image,
        phone: phone,
        email: email,
        program: program,
        graduationYear: graduationYear,
        graduated: graduated
      }
      handleAddStudent(newStudent)
      setFullName("")
      setImage("")
      setPhone(0)
      setEmail("")
      setProgram("")
      setGraduationYear(2023)
      setGraduated(false)
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <span>Add a Student</span>
            <div>
            <label>
                Full Name
                <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={handleOnChange}/>
            </label>

            <label>
                Profile Image
                <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleOnChange}/>
            </label>

            <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handleOnChange}/>
            </label>

            <label>
                Email
                <input name="email" type="email" placeholder="Email" value={email} onChange={handleOnChange}/>
            </label>
            </div>

            <div>
            <label>
                Program
                <select name="program" value={program} onChange={handleOnChange}>
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
                value={graduationYear}
                onChange={handleOnChange}
                />
            </label>

            <label>
                Graduated
                <input name="graduated" type="checkbox" checked={graduated} onChange={handleOnChange}/>
            </label>

            <button type="submit">Add Student</button>
            </div>

        </form>
    )
}

export default AddStudent