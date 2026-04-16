import {useState} from "react"

export function AddStudents({handleAddStudent}) {
  const [dataForm, setdataForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    image: "",
    program: "Web Dev",
    graduationYear: 2023,
    graduated: false,
  })

  console.log("Estado actual del formulario:", dataForm);
const handleSubmit = (e) => {
  e.preventDefault();
  handleAddStudent(dataForm)
}

const handleChange = (e) => {
  const { name , value , type, checked } = e.target

  setdataForm({
    ...dataForm,
    [name]: type === "checkbox" ? checked : value
  })
}
    return (
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={dataForm.fullName} onChange={handleChange}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={dataForm.image} onChange={handleChange}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={dataForm.phone} onChange={handleChange}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={dataForm.email} onChange={handleChange} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={dataForm.program} onChange={handleChange}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input value={dataForm.graduationYear} onChange={handleChange}
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
            <input name="graduated" type="checkbox"  value={dataForm.graduated} onChange={handleChange}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
    );
}