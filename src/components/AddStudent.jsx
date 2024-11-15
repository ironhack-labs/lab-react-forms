import React, { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
  

  const [formState, setFormState] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  // const [fullName, setFullName] = useState("");
  // const [image, setImage] = useState("");
  // const [phone, setPhone] = useState(""); 
  // const [email, setEmail] = useState(""); 
  // const [program, setProgram] = useState("");
  // const [graduationYear, setGraduationYear] = useState(2023);
  // const [graduated, setGraduated] = useState(false); 


  // const handleFullName = (e) => setFullName(e.target.value);
  // const handleImage = (e) => setImage(e.target.value);
  // const handlePhone = (e) => setPhone(e.target.value);
  // const handleEmail = (e) => setEmail(e.target.value);
  // const handleProgram = (e) => setProgram(e.target.value);
  // const handleGraduationYear= (e) => setGraduationYear(e.target.value);
  // const handleGraduated = (e) => setGraduated(e.target.checked);


  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormState((prevState) => ( { ...prevState, [name]: type === "checkbox" ? checked : value} ) );
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const newstudent = {
      fullName: formState.fullName,
      email: formState.email,
      phone: formState.phone,
      program: formState.program,
      image: formState.image,
      graduationYear: formState.graduationYear,
      graduated: formState.graduated
    }
    
    handleAddStudent(newstudent);
    
    setFormState({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false,
    })
  }



  return (
    <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholrde="Full Name" value={formState.fullName} onChange={handleChange}  />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={formState.image} onChange={handleChange}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={formState.phone} onChange={handleChange}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={formState.email} onChange={handleChange}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={formState.program} onChange={handleChange}>
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
              value={formState.graduationYear}
              onChange={handleChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" value={formState.graduated} onChange={handleChange}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
  );
};

export default AddStudent;