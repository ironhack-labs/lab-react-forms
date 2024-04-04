import { useState } from "react";

const AddStudent = ({ handleNewStudent }) => {
  const [formInput, setFormInput] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: "2023",
    graduated: false,
  });


  const handleFormData = (event) => {
    event.preventDefault();
    const newStudentData = {
      fullName: formInput.fullName,
      image: formInput.image,
      phone: formInput.phone,
      email: formInput.email,
      program: formInput.program,
      graduationYear: formInput.graduationYear,
      graduated: formInput.graduated,
    };
    console.log(newStudentData);
    handleNewStudent(newStudentData);
    setFormInput({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: "2023",
      graduated: false,
    });


  };

  const handleFormInput = (event) => {
    event.target.name === "graduated"
      ? setFormInput({
          ...formInput,
          [event.target.name]: event.target.checked,
        })
      : setFormInput({ ...formInput, [event.target.name]: event.target.value });
  };

  return (
    <form onSubmit={handleFormData}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
         
            value={formInput.fullName}
            onChange={handleFormInput}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
           
            value={formInput.image}
            onChange={handleFormInput}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
           
            value={formInput.phone}
            onChange={handleFormInput}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
        
            value={formInput.email}
            onChange={handleFormInput}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
        
            value={formInput.program}
            onChange={handleFormInput}
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
       
            value={formInput.graduationYear}
            onChange={handleFormInput}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            
            checked={formInput.graduated}
            onChange={handleFormInput}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
};

export default AddStudent;