import { useState } from "react"

function AddStudent(props) {

  const {handleAddStudent} = props

  // const [fullName, setFullName] = useState("")
  // const [image, setImage] = useState("")
  // const [phone, setPhone] = useState("")
  // const [graduationYear, setGraduationYear] = useState(2023)
  // const [program, setProgram] = useState("-- None --")  
  // const [graduated, setGraduated] = useState(false)
  // const [email, setEmail] = useState("")

  const [state, setState] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "-- None --",
    graduationYear: 2023,
    graduated: false
  })

  const handleChange = (event) => {

    // const name = event.target.name
    const value = event.target.value
    // const type = event.target.type
    // const checked = event.target.checked


    setState({
      ...state,
      [event.target.name]: value


    })
  }

  // const handleNameChange = (event) => {
  //   setFullName(event.target.value)
  // }

  // const handleImage = (event) => {
  //   setImage(event.target.value)
  // }

  // const handlePhone = (event) => {
  //   setPhone(event.target.value)
  // }

  // const handleGraduationYear = (event) => {
  //   setGraduationYear(event.target.value)
  // }

  // const handleProgram = (event) => {
  //   setProgram(event.target.value)
  // }

  // const handleEmail = (event) => {
  //   setEmail(event.target.value)
  // }

  // const handleGraduated = (event) => {
  //   setGraduated(event.target.value)
  // }

  const handleSubmit = (event) => {
    event.preventDefault()

    const newStudent = {
      ...state
    }

    // const newStudent = {
    //     fullName: fullName,
    //     email: email,
    //     phone: phone,
    //     program: program,
    //     image: image,
    //     graduationYear: graduationYear,
    //     graduated: graduated
    // }

    handleAddStudent(newStudent)

    // setFullName("");
    // setEmail("");
    // setPhone("");
    // setProgram("-- None --");
    // setImage("");
    // setGraduationYear(2023);
    // setGraduated(false);

    setState({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "-- None --",
      graduationYear: 2023,
      graduated: false
    });
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleChange} name="fullName" type="text" placeholder="Full Name" value={state.fullName}/>
          </label>

          <label>
            Profile Image
            <input onChange={{handleChange}} name="image" type="url" placeholder="Profile Image" value={state.image} />
          </label>

          <label>
            Phone
            <input onChange={handleChange} name="phone" type="tel" placeholder="Phone" value={state.phone}/>
          </label>

          <label>
            Email
            <input onChange={handleChange} name="email" type="email" placeholder="Email" value={state.email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={handleChange} name="program" value={state.program}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input onChange={handleChange}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={state.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input onChange={handleChange} name="graduated" type="checkbox" checked={state.graduated} />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
    </div>
  )
}

export default AddStudent