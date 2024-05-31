const AddStudent = (props) => {
  return (
    <div>
      <form onSubmit={props.handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="name"
              type="text"
              value={props.fullName}
              placeholder="Full Name"
              onChange={(event) => {
                props.setFullName(event.target.value);
              }}
            />
          </label>

          <label>
            Profile Image
            <input
              name="profile-image"
              value={props.image}
              type="url"
              placeholder="Profile Image"
              onChange={(event) => {
                props.setImage(event.target.value);
              }}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={props.phone}
              type="tel"
              placeholder="Phone"
              onChange={(event) => {
                props.setPhone(event.target.value);
              }}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={props.email}
              type="email"
              placeholder="Email"
              onChange={(event) => {
                props.setEmail(event.target.value);
              }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={props.program}
              onChange={(event) => {
                props.setProgram(event.target.value);
              }}
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
              value={props.graduationYear}
              onChange={(event) => {
                props.setGraduationYear(event.target.value);
              }}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={props.graduated}
              onChange={(event) => {
                props.setGraduated(event.target.checked);
              }}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </div>
  );
};
export default AddStudent;
