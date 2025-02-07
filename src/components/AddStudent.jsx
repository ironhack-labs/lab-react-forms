import { useState } from "react";

function AddStudent({ handleAddStudent}) {
    const [state, setState] = useState({
        fullName: '',
        image: '',
     phone: '',
        email: '',
        program: '',
        graduationYear: 0,
        graduated: false,
      })
      const handleChange = (e) => {
        const { name, value, type, checked} = e.target;
        setState(prevState => ({
          ...prevState,
          [name]: type === 'checkbox' ? checked : value
        }))
      }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const newStudent = {
          fullName: state.fullName,
          image: state.image,
          phone: state.phone,
          email: state.email,
          program: state.program,
          graduationYear: state.graduationYear,
          graduated: state.graduated,
        };
        handleAddStudent(newStudent);

          setState({
      fullName: '',
      image: '',
      phone: '',
      email: '',
      program: '',
      graduationYear: 0,
      graduated: false,
    });
  };
        
    
      return (
        <form onSubmit={handleFormSubmit}>
          <span>Add a Student</span>
          <div>
            <label>
              Full Name
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                value={state.fullName}
                onChange={handleChange}
              />
            </label>

            <label>
              Profile Image
              <input
                name="image"
                type="url"
                placeholder="Profile Image"
                value={state.image}
                onChange={handleChange}
              />
            </label>

            <label>
              Phone
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                value={state.phone}
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={state.email}
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Program
              <select
                name="program"
                value={state.program}
                onChange={handleChange}
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
                value={state.graduationYear}
                onChange={handleChange}
              />
            </label>

            <label>
              Graduated
              <input
                name="graduated"
                type="checkbox"
                checked={state.graduated}
                onChange={handleChange}
              />
            </label>

            <button type="submit">Add Student</button>
          </div>
        </form>
      );
}

export default AddStudent;