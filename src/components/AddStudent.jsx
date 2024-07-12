const AddStudent = ({
  handleChange,
  handleSubmit,
  fullName,
  setFullName,
  image,
  setImage,
  phone,
  setPhone,
  email,
  setEmail,
  program,
  setProgram,
  graduationYear,
  setGraduationYear,
  graduated,
  setGraduated,
}) => {
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
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(e) => handleChange(e, setImage)}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(e) => handleChange(e, setPhone)}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleChange(e, setEmail)}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={program}
            onChange={(e) => handleChange(e, setProgram)}
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
            checked={graduationYear}
            onChange={(e) => handleChange(e, setGraduationYear)}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            value={graduated}
            onChange={(e) => handleChange(e, setGraduated)}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;
