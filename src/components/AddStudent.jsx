import React from 'react'

function AddStudent({
    fullName,
    setFullName,
        profileImage,
        setProfileImage,
        phoneNumber,
        setPhoneNumber,
        email,
        setEmail,
        program,
        setProgram,
        graduationYear,
        setGraduationYear,
        graduated,
        setGraduated,
        handleSubmit,
        handleChange
}) {
  return (
    <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={fullName}
              onChange={(e) => handleChange(e, setFullName)}
            />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image"
            value = {profileImage}
            onChange={(e) => handleChange(e, profileImage)}
            />
          </label>

          <label>
            Phone
            <input name="phone"
            type="tel" 
            placeholder="Phone"
            value = {phoneNumber}
            onChange = {(e) => handleChange(e, phoneNumber)}
             />
          </label>

          <label>
            Email
            <input name="email"
            type="email"
            placeholder="Email"
            value = {email}
            onChange = {(e) => handleChange(e, email)} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program"
              value={program}
              onSelect={(e) => setProgram(e.target.value)}
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
              value = {graduationYear}
              onChange = {(e) => handleChange(e, graduationYear)}
            />
          </label>

          <label>
            Graduated
            <input name="graduated"
             type="checkbox"
             value = {graduated}
             onClick = {() => setGraduated(!graduated)} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
  )
}

export default AddStudent