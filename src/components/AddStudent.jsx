import "../App.css";
import { useState } from "react";

export default function AddStudent (props) {
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [program, setProgram] = useState("");
    const [image, setImage] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [graduated, setGraduated] = useState(false);

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit({
                fullName: fullname,
                email: email,
                phone: phone,
                program: program,
                image: image,
                graduationYear: graduationYear,    
                graduated: graduated
            })
        }} >
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input name="fullName" type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullname(e.target.value)} />
          </label>

          <label>
            Profile Image
            <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(e) => setImage(e.target.value)} />
          </label>

          <label>
            Phone
            <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
          </label>

          <label>
            Email
            <input name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" value={program} onChange={(e) => setProgram(e.target.value)} >
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
              onChange={(e) => setGraduationYear(e.target.value)} 
            />
          </label>

          <label>
            Graduated
            <input name="graduated" type="checkbox" checked={graduated} onChange={() => setGraduated(!graduated)} />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    )
}