import { useState } from "react";

function AddStudent(props) {

    /*const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);*/
    const [allValues, setAllValues] = useState({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        image: "",
        graduationYear: 2023,
        graduated: false
    });
  
  
    /*const handleFullNameChange = ((event)=>{
      setFullName(event.target.value);
    })
    const handleImageChange = ((event)=>{
      setImage(event.target.value);
    })
    const handlePhoneChange = ((event)=>{
      setPhone(event.target.value);
    })
    const handleEmailChange = ((event)=>{
      setEmail(event.target.value);
    })
    const handleProgramChange = ((event)=>{
      setProgram(event.target.value);
    })
    const handleGraduationYearChange = ((event)=>{
      setGraduationYear(event.target.value);
    })
    const handleGraduatedChange = ((event)=>{
      setGraduated(event.target.checked);
    })*/
  
    const handleAll = ((event)=>{
        let name = event.target.name;
        setAllValues({
            [name]: event.target.type === "checked" ? event.target.checked : event.target.value
        })
    })

    const handleSubmit = ((event)=>{
      event.preventDefault();
  
      const clone = [...props.students]
      clone.unshift(allValues)
      props.setStudents(clone);
  
      setAllValues({
        fullName: "",
        email: "",
        phone: "",
        program: "",
        image: "",
        graduationYear: 2023,
        graduated: false
      })
    })

  return (
    <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input value = {allValues.fullName} name="fullName" type="text" placeholder="Full Name" onChange={handleAll}/>
          </label>

          <label>
            Profile Image
            <input value={allValues.image} name="image" type="url" placeholder="Profile Image" onChange={handleAll}/>
          </label>

          <label>
            Phone
            <input value={allValues.phone} name="phone" type="tel" placeholder="Phone" onChange={handleAll}/>
          </label>

          <label>
            Email
            <input value={allValues.email} name="email" type="email" placeholder="Email" onChange={handleAll}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select value={allValues.program} name="program" onChange={handleAll}>
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
              value={allValues.graduationYear}
              onChange={handleAll}
            />
          </label>

          <label>
            Graduated
            <input checked={allValues.graduated} name="graduated" type="checkbox" onChange={handleAll}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
  )
}

export default AddStudent