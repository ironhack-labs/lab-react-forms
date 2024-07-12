import React from "react";

function AddStudent(props) {
  const{ 
    students,
    setStudents,

    fullName,
    setFullName,

    email,
    setEmail,

    image,
    setImage,

    phone,
    setPhone,

    program,
    setProgram,

    graduated,
    setGraduated,

    graduationYear,
    setGraduationYear,
    
   }= props;
//    const [state, setState] = useState({

//    })

//    function handleChange(event){
//     const value = event.target.value
//     setState({
//         ...state,
//         [event.target.name]:value
//     })
//    }

  //event to input
  function handleFullName(event) {
    setFullName(event.target.value);
  }
  function handleImage(event) {
    setImage(event.target.value);
  }
  function handlePhone(event) {
    setPhone(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handleProgram(event) {
    setProgram(event.target.value);
  }
  function handleGraduationYear(event) {
    setGraduationYear(event.target.value);
  }
  function handleGraduated(event) {
    setGraduated(event.target.checked);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //creating newObject w/ inputs to add to students
    const newObject = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    //update students
    setStudents([...students, newObject]);
    //reset form
    setFullName("");
    setEmail("");
    setImage("");
    setPhone("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              value={fullName}
              type="text"
              placeholder="Full Name"
              onChange={handleFullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              value={image}
              type="url"
              placeholder="Profile Image"
              onChange={handleImage}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={phone}
              placeholder="Phone"
              onChange={handlePhone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={email}
              placeholder="Email"
              onChange={handleEmail}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={handleProgram}>
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
              value={graduationYear}
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={handleGraduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              checked={graduated}
              type="checkbox"
              onChange={handleGraduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}

export default AddStudent;
