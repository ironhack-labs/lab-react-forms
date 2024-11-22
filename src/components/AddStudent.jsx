import { useState } from "react";

function AddStudent(props) {
    const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  function handleSubmit(submit) {
    submit.preventDefault();

    const newStudent = {
      fullName: name,
      email: email,
      phone: tel,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated
    };

    props.handleAddStudent(newStudent);
  }

      //BONUS ITERATION 5
    /*   const handleStudent = (e) => {
        let name = e.target.name;
        setState
    } */
    return (
        <form onSubmit = {handleSubmit}> {/* onSubmit to be put here and not inside the button of type="sumbit" */}
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input 
              onChange = {(e) => {setName(e.target.value);
              }}
              name="name" type="text" placeholder="Full Name" value= {name} />
          </label>

          <label>
            Profile Image
            <input 
            onChange = {(e) => {setImage(e.target.value);
            }}
            name="image" type="url" placeholder="Profile Image" value = {image}/>
          </label>

          <label>
            Phone
            <input 
            onChange = {(e) => {setTel(e.target.value);
            }}
            name="phone" type="tel" placeholder="Phone" value = {tel}/>
          </label>

          <label>
            Email
            <input
            onChange = {(e) => {setEmail(e.target.value);
            }} 
            name="email" type="email" placeholder="Email" value = {email}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select 
            onChange = {(e) => {setProgram(e.target.value);
            }} 
            name="program" value = {program}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input 
              onChange = {(e) => {setGraduationYear(e.target.value);
              }} 
              value = {graduationYear}
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
            <input 
              onChange = {(e) => {setGraduated(e.target.checked);
              }} 
              name="graduated" type="checkbox" checked= {graduated} /> {/* Change "value" and put "checked" instead. No issue for the end user if I forgot to do it (for now)*/}
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
    )
}

export default AddStudent;
