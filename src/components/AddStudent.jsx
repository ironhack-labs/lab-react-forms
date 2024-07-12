import { useState } from "react"

function AddStudent(props) {

    const [formulario, setFormulario] = useState( 
        {
        fullName : "",
        image : "",
        phone : "",
        email : "",
        program : "",
        graduationYear : 2023,
        graduated : false
      }
    )
 
    const handleGlobal = (event)=>{

        let propertyName = event.target.name
        let propertyValue = event.target.value
        let newState = {...formulario, [propertyName]:propertyValue}
        setFormulario(newState)

    }  

  const addStudentBtn = (event)=>{
    event.preventDefault()

    

    
      props.setStudents([formulario , ...props.students])

      setFormulario(
        {
        fullName : "",
        image : "",
        phone : "",
        email : "",
        program : "",
        graduationYear : 2023,
        graduated : false
      }
    )
    }

  return (
    
    <form onSubmit={addStudentBtn}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input onChange={handleGlobal} value={formulario.fullName} name="fullName" type="text" placeholder="Full Name" />
      </label>

      <label>
        Profile Image
        <input onChange={handleGlobal} value={formulario.image} name="image" type="url" placeholder="Profile Image" />
      </label>

      <label>
        Phone
        <input onChange={handleGlobal} value={formulario.phone} name="phone" type="tel" placeholder="Phone" />
      </label>

      <label>
        Email
        <input onChange={handleGlobal} value={formulario.email} name="email" type="email" placeholder="Email" />
      </label>
    </div>

    <div>
      <label>
        Program
        <select onChange={handleGlobal} value={formulario.program} name="program">
          <option value="">-- None --</option>
          <option value="Web Dev">Web Dev</option>
          <option value="UXUI">UXUI</option>
          <option value="Data">Data</option>
        </select>
      </label>

      <label>
        Graduation Year
        <input
        onChange={handleGlobal}
        value={formulario.graduationYear}
          name="graduationYear"
          type="number"
          placeholder="Graduation Year"
          minLength={4}
          maxLength={4}
          min={2023}
          max={2030}
        />
      </label>

      <label>
        Graduated
        <input onChange={handleGlobal} name="graduated" type="checkbox" checked={formulario.graduated}/>
      </label>

    <button type="submit">Add Student</button>
    </div>
    </form>

  )
}

export default AddStudent