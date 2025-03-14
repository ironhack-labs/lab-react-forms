import { useState } from "react";
const AddStudent = ({students, setStudents}) => {

    const [fullName, setFullName] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("--None--");
    const [graduationYear, setGraduationYear] = useState(2023);
    const [graduated, setGraduated] = useState(false);


    function handleCreateStudent(event) {
        event.preventDefault();
    
        const newStudentToAdd = {
          fullName,
          email,
          phone,
          program,
          image: profileImage,
          graduated
        }
    
        console.log(`in submission`, {newStudentToAdd})
        setStudents([newStudentToAdd, ...students])
        console.log(students)
    
    
          // Reset form fields
        setFullName("");
        setProfileImage("");
        setPhone("");
        setEmail("");
        setProgram("--None--");
        setGraduationYear(2023);
        setGraduated(false);
        
      }



  return (
    <form onSubmit={handleCreateStudent}>
    <span>Add a Student</span>
    <div>
      <label>
        Full Name
        <input 
        name="fullName" 
        type="text" 
        placeholder="Full Name"
        value = {fullName}
        onChange={(event)=>{setFullName(event.target.value)
          console.log(event.target.value)
        }}

         />
      </label>

      <label>
        Profile Image
        <input 
        name="image" 
        type="url" 
        placeholder="Profile Image" 
        value = {profileImage}
        onChange = {(event)=>{setProfileImage(event.target.value)}}/>
      </label>

      <label>
        Phone
        <input 
        name="phone" 
        type="tel" 
        placeholder="Phone"
        value = {phone}
        onChange = {(event)=>{setPhone(event.target.value)}}
        />
      </label>

      <label>
        Email
        <input 
        name="email" 
        type="email" 
        placeholder="Email"
        value = {email}
        onChange = {(event)=>{setEmail(event.target.value)}} 
         />
      </label>
    </div>

    <div>
      <label>
        Program
        <select name="program" onChange = {(event)=>{setProgram(event.target.value)}} >
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
          value = {graduationYear}
          onChange = {(event)=>{setGraduationYear(event.target.value)}} 
          
        />
      </label>

      <label>
        Graduated
        <input 
        name="graduated" 
        type="checkbox" 
        checked = {graduated}
        onChange = {(event)=>{setGraduated(event.target.checked)
          console.log(event.target.checked)
        }} 
        />
      </label>

      <button type="submit">Add Student</button>
    </div>

  </form>
  )
}

export default AddStudent