import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [data, setData] = useState({
    fullName:"",
    image:"",
    phone:"",
    email:"",
    program:"",
    graduationYear: 2023,
    graduated: false,
  });
  
  const handleSetData = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setData({...data, [name]: value})
  } 

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const student = {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      program: data.program,
      image: data.image,
      graduationYear: data.graduationYear,
      graduated: data.graduated,
    };

    handleAddStudent(student);
  }

  return (
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={data.fullName} onChange={handleSetData}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={data.image} onChange={handleSetData}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={data.phone} onChange={handleSetData}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={data.email} onChange={handleSetData}/>
          </label>
        </div>

        <div>
          <label>
            Program 
            <select name="program" onChange={handleSetData} value={data.program}>
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
              value={data.graduationYear}
              onChange={handleSetData}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={data.graduated} onChange={handleSetData}/>
          </label>

          <button type="submit" >Add Student</button>
        </div>

      </form>
  )
}

export default AddStudent;