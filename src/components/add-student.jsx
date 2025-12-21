import { useState } from "react";

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  program: "",
  image: "",
  graduationYear: 2023,
  graduated: false
}

function AddStudent({ handleAddStudent }){
  //States
  const [state, setState] = useState(initialState);

  //Handles
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setState({
      ...state,
      [name]: type === "checkbox" ? checked : value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newStudent = {
      fullName: state.fullName,
      email: state.email,
      phone: state.phone,
      program: state.program,
      image: state.image,
      graduationYear: state.graduationYear,
      graduated: state.graduated
    }

    handleAddStudent(newStudent);

    //Reset the form
    setState(initialState);
    
  }
  
  return (
    <form method="post" onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input name="fullName" type="text" placeholder="Full Name" value={state.fullName} onChange={handleChange}/>
        </label>

        <label>
          Profile Image
          <input name="image" type="url" placeholder="Profile Image" value={state.image} onChange={handleChange}/>
        </label>

        <label>
          Phone
          <input name="phone" type="tel" placeholder="Phone" value={state.phone} onChange={handleChange}/>
        </label>

        <label>
          Email
          <input name="email" type="email" placeholder="Email"value={state.email} onChange={handleChange}/>
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={state.program} onChange={handleChange}>
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
          <input name="graduated" type="checkbox" checked={state.graduated} onChange={handleChange}/>
        </label>

        <button type="submit" >Add Student</button>
      </div>

    </form>
  );
}

export default AddStudent;