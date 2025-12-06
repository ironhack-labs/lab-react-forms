export default function AddStudents({
  handleAddStudents,
  handleChange,
  value,
}) {
  return (
    <form onSubmit={handleAddStudents}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={value.name}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={value.image}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={value.phone}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={value.email}
            onChange={(e) => handleChange(e)}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={value.program}
            onChange={(e) => handleChange(e)}
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
            value={value.graduationYear}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            value={value.graduated}
            onChange={(e) => handleChange(e)}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}
