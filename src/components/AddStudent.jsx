import React from 'react'
import { useState } from "react";

function AddStudent(props) {
  //const { students, setStudents, student, setStudent, handleAddStudent } = props
  const { students, setStudents, handleAddStudent } = props
  
  const [fullName, setFullName] = useState("");
  const [image, SetImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(0);
  const [graduated, setGraduated] = useState(false);

  const[student, setStudent] = useState({});

/*   const[student, setStudent] = useState({
    
  }); */
  /* const handleAddStudent = (event) => {
    setStudent()
  } */
/*   {
    fullName: "example",
    email: "example",
    phone: "example",
    program: "example",
    image: "example",
    graduationYear: 2023,
    graduated: true
  } */
  
  const handleFullName = (event) => {
    let value = event.target.value
    setFullName(value)
  }
  const handleImage = (event) => {
    let value = event.target.value
    SetImage(value)
  }
  const handlePhone = (event) => {
    let value = event.target.value
    setPhone(value)
  }
  const handleEmail = (event) => {
    let value = event.target.value
    setEmail(value)
  }
  
  const handleProgram = (event) => {
    
    setProgram(event.target.value)
  }
  const hanDleGraduationYear = (event) => {
   
    setGraduationYear(event.target.value)
  }
  const handleGraduated = (event) => {
    
    setGraduated(event.target.checked)
  } 

  const handleFormSubmit = (event) => {
    event.preventDefault()
    let newStudent = {}
    //tenemos que crear un objeto con los datos
    setStudent( newStudent = {
      fullName: fullName,
      email:email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    })
    
    //tenemos que añadirlo a la lista de estudiantes
    /* setStudents(()=>{
      const cloneStud = [...students]
      cloneStud.unshift(newStudent)
      return cloneStud
    }) */

    setStudents((students)=>[newStudent,...students])

   
     /*  setFullName("")
      setEmail("") 
      setPhone(0)
      setProgram("")
      SetImage("")
      setGraduationYear(0)
      setGraduated(false) */

      setStudent(()=>[])
    

  }

  return (
    <form onSubmit={handleFormSubmit}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleFullName} value={fullName}/>
      </label>

      <label>
        Profile Image
        <input name="image" type="url" placeholder="Profile Image" onChange={handleImage} value={image}/>
      </label>

      <label>
        Phone
        <input name="phone" type="tel" placeholder="Phone"  onChange={handlePhone}value={phone}/>
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="Email" onChange={handleEmail}value={email}/>
      </label>
    </div>

    <div>
      <label>
        Program
        <select name="program" onChange={handleProgram}  value={program}
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
          onChange={ hanDleGraduationYear }
          value={graduationYear}
          
        />
      </label>

      <label>
        Graduated
        <input name="graduated" type="checkbox" onChange={handleGraduated}  checked={graduated}
        />
      </label>

      <button type="submit">Add Student</button>
    </div>

  </form>
  )
}

export default AddStudent