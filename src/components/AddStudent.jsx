import { useState } from "react";

function AddStudent({ handleAddStudent }){

    // const [fullName, setFullName] = useState("");
    // const [image, setImage] = useState("");
    // const [phone, setPhone] = useState("");
    // const [email, setEmail] = useState("");
    // const [program, setProgram] = useState("");
    // const [graduationYear, setGraduationYear] = useState(0);
    // const [graduated, setGraduated] = useState(false);

    const [state, setState] = useState({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: 0,
      graduated: ""
    })

    const handleInputs = (event) => {

      let name = event.target.name
      let typeE = event.target.type

      console.log(name, typeE);

        setState({
          ...state,
          [name]: event.target.value
        })
      
      if(typeE=="checkbox"){
        setState({
          ...state,
          [name]: event.target.checked
        })
      }   
    }

    const handleSubmit = (e)=>{
        e.preventDefault(); // prevents the form from refreshing the page
    
        //new student object
        const newStudent = {
        "fullName": state.fullName,
        "email": state.email,
        "phone": state.phone,
        "program": state.program,
        "image": state.image,
        "graduationYear": state.graduationYear,
        "graduated": state.graduated
        } 
    
        //const studentsCopy = [...students, newStudent];
        //setStudents(studentsCopy);

        console.log(newStudent);

        handleAddStudent(newStudent);

         setState({
           fullName: "",
           image: "",
           phone: "",
           email: "",
           program: "",
           graduated: false,
           graduationYear: 0,
         })
       
      }

    return (
      <form onSubmit={handleSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input name="fullName" value={state.fullName} type="text" placeholder="Full Name" onChange={handleInputs} />
        </label>

        <label>
          Profile Image
          <input name="image" value={state.image} type="url" placeholder="Profile Image" onChange={handleInputs}/>
        </label>

        <label>
          Phone
          <input name="phone" value={state.phone} type="tel" placeholder="Phone" onChange={handleInputs}/>
        </label>

        <label>
          Email
          <input name="email" value={state.email} type="email" placeholder="Email" onChange={handleInputs}/>
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={state.program} onChange={handleInputs}>
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
            value={state.graduationYear}
            type="number"
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange={handleInputs}
          />
        </label>

        <label>
          Graduated
          <input name="graduated" value={state.graduated} type="checkbox" onChange={handleInputs} />
        </label>

        <button type="submit">Add Student</button>
      </div>

    </form>

    )
}

export default AddStudent