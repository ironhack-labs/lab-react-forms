import React, { useState } from 'react'
import{v4  as uuidv4} from "uuid";

function AddStudent({students, setStudents}) {
    const [newStudent, setNewStudent] = useState(
    {
      id: uuidv4(),
      fullName:"",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 2023,
      graduated: false

    }
  )
  function handleAddNewStudent(event){
    event.preventDefault();
    const studentToAdd = {
      ...newStudent,
      id:uuidv4()};
    //   id: uuidv4(),
    //   fullName,
    //   image, 
    //   phone, 
    //   email, 
    //   program, 
    //   graduationYear,
    //   graduated,
    // };
    // console.log(studentToAdd);

    setStudents([...students, studentToAdd])
  }

  function handleChange(event){
    const key = event.target.name;
    const value = event.target.value;
    setNewStudent({...newStudent, [key]: value,})
  }
  return (
    <>
     {/* FORM */}
      <form onSubmit={handleAddNewStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            // <input name="fullName" type="text" placeholder="Full Name" onChange={handleChange} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" onChange={handleChange} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" onChange={handleChange}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" onChange={handleChange}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleChange}>
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
              onChange={handleChange}
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" onChange={handleChange}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}

</>
  )
}

export default AddStudent