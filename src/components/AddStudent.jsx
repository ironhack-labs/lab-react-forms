import { useState } from "react";

const defaultFormData = {
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  }

function AddStudent({handleAddStudent}) {

    const [formData, setFormData] = useState(defaultFormData);

    const {fullName, image, phone, email, program, graduationYear, graduated} = formData;

    const onChange = (e) => setFormData({...formData, [e.target.name]: e.target.value});

    const onSubmit = (e) => {
        e.preventDefault();
    
        handleAddStudent(formData);
        setFormData(defaultFormData);
    }
    

    return (
        <form  onSubmit={onSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={onChange}/>
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={onChange}/>
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={onChange}/>
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={onChange}/>
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value = {program} onChange={onChange}>
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
              value={graduationYear}
              onChange={onChange}
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={onChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
    );
}

export default AddStudent;