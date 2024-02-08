import { useState } from "react";

function AddStudent({handleAddStudent}) {

    const [newStudent, setNewStudent] = useState({fullName:"", image:"", phone:"", email:"", program:"", graduationYear:"", graduated:""});
 
    const handleValueChanges = e => {
      setNewStudent({
        ...newStudent, [e.target.name]: e.target.value,
      })
    }
 
    {/*
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [progam, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState("");
  const [graduated, setGraduated] = useState("");
  */}

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddStudent(newStudent)

    setNewStudent ({
      fullName: "", 
      image:"", 
      phone:"", 
      email:"", 
      program:"", 
      graduationYear:"", 
      graduated:""
    });

   
  };
  return (
    <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={newStudent.fullName}
              onChange={handleValueChanges}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              placeholder="Profile Image"
              value={newStudent.image}
              onChange={handleValueChanges}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              placeholder="Phone"
              value={newStudent.phone}
              onChange={handleValueChanges}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
              value={newStudent.email}
              onChange={handleValueChanges}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={newStudent.progam}
              onChange={handleValueChanges}
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
              value={newStudent.graduationYear}
              onChange={handleValueChanges}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              type="checkbox"
              checked={newStudent.graduated}
              onChange={handleValueChanges}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
  );
}
export default AddStudent;
