export function AddStudent({fullName, setFullName, image, setImage, phone, setPhone, email, setEmail, program, setProgram, graduationYear, setGraduationYear, graduated, setGraduated, addStudent}) {

  return (
    <form onSubmit={addStudent}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(e) => {setFullName(e.target.value)}} />
      </label>

      <label>
        Profile Image
        <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
      </label>

      <label>
        Phone
        <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(e) => {setPhone(e.target.value)}}/>
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      </label>
    </div>

    <div>
      <label>
        Program
        <select name="program" value={program} onChange={(e) => {setProgram(e.target.value)}}>
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
          min={2025}
          max={2035}
          value={graduationYear}
          onChange={(e) => {setGraduationYear(e.target.value)}}
        />
      </label>

      <label>
        Graduated
        <input name="graduated" type="checkbox" checked={graduated} onChange={(e) => {setGraduated(e.target.value)}}/>
      </label>

      <button type="submit">Add Student</button>
    </div>

  </form>
  )
}