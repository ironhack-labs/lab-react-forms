import { useState } from "react";


function AddStudent(props) {
  
  const {setName,setImg,setPhone,setEmail,setProgram,setGraduationYear,setGraduated,name,img,phone,email,program,graduationYear,graduated,handleNewStudent} = props

  return (
    <form  onSubmit={handleNewStudent}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input
          onChange={() => setName(event.target.value)}
          name="fullName"
          type="text"
          placeholder="Full Name"
          value={name}
        />
      </label>

      <label>
        Profile Image
        <input
          onChange={() => setImg(event.target.value)}
          name="image"
          type="url"
          placeholder="Profile Image"
          value={img}
        />
      </label>

      <label>
        Phone
        <input
          onChange={() => setPhone(event.target.value)}
          name="phone"
          type="tel"
          placeholder="Phone"
          value={phone}
        />
      </label>

      <label>
        Email
        <input
          onChange={() => setEmail(event.target.value)}
          name="email"
          type="email"
          placeholder="Email"
          value={email}
        />
      </label>
    </div>

    <div>
      <label>
        Program
        <select
          onChange={() => setProgram(event.target.value)}
          name="program"
          value={program}
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
          onChange={() => setGraduationYear(event.target.value)}
          name="graduationYear"
          type="number"
          placeholder="Graduation Year"
          minLength={4}
          maxLength={4}
          min={2023}
          max={2030}
          value={graduationYear}
        />
      </label>

      <label>
        Graduated
        <input
          onChange={() => setGraduated(event.target.checked)}
          name="graduated"
          type="checkbox"
          value={graduated}
        />
      </label>

      <button type="submit">Add Student</button>
    </div>
  </form>
  )
}

export default AddStudent