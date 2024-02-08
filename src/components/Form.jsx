const Form = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            onChange={(e) => {
              props.setFullName(e.target.value);
            }}
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={props.fullName}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={(e) => {
              props.setimage(e.target.value);
            }}
            value={props.image}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={(e) => {
              props.setPhone(e.target.value);
            }}
            value={props.phone}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={(e) => {
              props.setEmail(e.target.value);
            }}
            value={props.email}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            onChange={(e) => {
              props.setProgram(e.target.value);
            }}
            value={props.program}
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
            onChange={(e) => {
              props.setGraduationYear(e.target.value);
            }}
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            value={props.graduationYear}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            onChange={(e) => {
              props.setGraduated(e.target.checked);
            }}
            value={props.graduated}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};
export default Form;
