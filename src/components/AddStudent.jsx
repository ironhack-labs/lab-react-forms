import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

function AddStudent({students, setStudents}) {

    const [formData, setFormData] = useState({
        fullName: "",
        image:"",
        phone:"",
        email:"",
        program: "None",
        graduationYear: 0,
        graduated: false
    });

    function handleInputChange(event) {
        const { name, value, type, checked } = event.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value
        })
    }
    
//   const [fullName, setFullName] = useState("");
//   const [image, setImage] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [program, setProgram] = useState("None");
//   const [graduationYear, setGraduationYear] = useState(0);
//   const [graduated, setGraduated] = useState(false);


    function handleAddStudent(event) {
        event.preventDefault();
        const newStudent = { id: uuidv4(), ...formData};
        setStudents([newStudent, ...students])

        setFormData({
        fullName: "",
        image:"",
        phone:"",
        email:"",
        program: "None",
        graduationYear: 0,
        graduated: false
        });
    }

//   function handleAddStudent(event) {
//     event.preventDefault();
//     const newStudent = {id: uuidv4(), fullName, image, phone, email, program, graduationYear, graduated};
//     setStudents([newStudent, ...students]);

//     setFullName("");
//     setImage("");
//     setPhone("");
//     setEmail("");
//     setProgram("None");
//     setGraduationYear(0);
//     setGraduated(false);
//   }

  return (
    <div>
        
      {/* FORM */}
      <form onSubmit={handleAddStudent}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input 
              name="fullName" 
              type="text" 
              placeholder="Full Name" 
              value={formData.fullName}
              onChange={handleInputChange}
            //   value={fullName}
            //   onChange={(event) => {
            //     setFullName(event.target.value);
            //   }}
            />
          </label>

          <label>
            Profile Image
            <input 
              name="image" 
              type="url" 
              placeholder="Profile Image" 
              value={formData.image}
              onChange={handleInputChange}
            //   value={image}
            //   onChange={(event) => {
            //     setImage(event.target.value);
            //   }}
            />
          </label>

          <label>
            Phone
            <input 
              name="phone" 
              type="tel" 
              placeholder="Phone" 
              value={formData.phone}
              onChange={handleInputChange}
            //   value={phone}
            //   onChange={(event) => {
            //     setPhone(event.target.value);
            //   }}
            />
          </label>

          <label>
            Email
            <input 
              name="email" 
              type="email" 
              placeholder="Email" 
              value={formData.email}
              onChange={handleInputChange}
            //   value={email}
            //   onChange={(event) => {
            //     setEmail(event.target.value);
            //   }}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
              name="program"
              value={formData.program}
              onChange={handleInputChange}
            //   value={program} 
            //   onChange={(event) => { 
            //     setProgram(event.target.value); 
            //   }}
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
              value={formData.graduationYear}
              onChange={handleInputChange}
            //   value={graduationYear}
            //   onChange={(event) => {
            //     setGraduationYear(event.target.value);
            //   }}
            />
          </label>

          <label>
            Graduated
            <input 
              name="graduated" 
              type="checkbox" 
              checked={formData.graduated}
              onChange={handleInputChange}
            //   checked={graduated}
            //   onChange={(event) => {
            //     setGraduated(event.target.checked);
            //   }}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}
    </div>
  )
}
export default AddStudent