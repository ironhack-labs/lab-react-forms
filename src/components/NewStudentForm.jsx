import { useState } from "react";

function NewStudentForm(props) {

const [fullName, setFullName] = useState("");
  const [img, setImg] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("-- None --");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleFormChange = (event) => {
    switch (event.target.name) {
      case "fullName":
        setFullName(event.target.value);
        break;
      case "image":
        setImg(event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "program":
        setProgram(event.target.value);
        break;
      case "graduationYear":
        setGraduationYear(event.target.value);
        break;
      case "graduated":
        setGraduated(event.target.checked);
        break;
    }
  };
  const handleFormSubmission = (event) => {
    event.preventDefault()

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: img,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    props.setStudents([...props.students,newStudent])


    console.log(newStudent)
    
  setFullName("");
  setImg("");
  setPhone("");
  setEmail("");
  setProgram("-- None --");
  setGraduationYear(2023);
  setGraduated(false);

  };
  return (
    
      <form onSubmit={handleFormSubmission}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              onChange={handleFormChange}
              value={fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              onChange={handleFormChange}
              value={img}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              onChange={handleFormChange}
              value={phone}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              onChange={handleFormChange}
              value={email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleFormChange} value={program}>
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
              onChange={handleFormChange}
              value={graduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              onChange={handleFormChange}
              checked={graduated}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      
  )
}
export default NewStudentForm;