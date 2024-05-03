import { useState } from "react";

function AddStudent(props) {
    const [fullName, setFullName] = useState("defaultName");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("000-000-0000");
    const [email, setEmail] = useState("defaultName@example.com");
    const [program, setProgram] = useState("Web Dev");
    const [gradYear, setGradYear] = useState(2023);
    const [isGraduated, setIsGraduated] = useState(false);
  
    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: gradYear,
      graduated: isGraduated
    }


    const handleFullName = (event) => {setFullName(event.target.value)}
    const handleImage = (event) => {setImage(event.target.value)}
    const handlePhone = (event) => {setPhone(event.target.value)}
    const handleEmail = (event) => {setEmail(event.target.value)}
    const handleProgram = (event) => {setProgram(event.target.value)}
    const handleGradYear = (event) => {setGradYear(event.target.value)}
    const handleIsGraduated = (event) => {setIsGraduated(event.target.checked)}
    const handleSubmit = (event) => {
      event.preventDefault()
      props.setStudents((students)=>{
        return [...students, newStudent]
      })
    }

  return (
    <>
    {/* FORM */}
    <form onSubmit={handleSubmit}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input name="fullName" type="text" placeholder="Full Name" onChange={handleFullName}/>
      </label>

      <label>
        Profile Image
        <input name="image" type="url" placeholder="Profile Image" onChange={handleImage}/>
      </label>

      <label>
        Phone
        <input name="phone" type="tel" placeholder="Phone" onChange={handlePhone}/>
      </label>

      <label>
        Email
        <input name="email" type="email" placeholder="Email" onChange={handleEmail}/>
      </label>
    </div>

    <div>
      <label>
        Program
        <select name="program" onChange={handleProgram}>
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
          onChange={handleGradYear}
        />
      </label>

      <label>
        Graduated
        <input name="graduated" type="checkbox" onChange={handleIsGraduated} />
      </label>

      <button type="submit">Add Student</button>
    </div>

  </form>
  {/* FORM END */}
  </>
  )
}

export default AddStudent