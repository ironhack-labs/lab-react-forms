import { useState } from "react";
export default function AddStudent(props){
    const [form, setForm] =useState({
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "",
        graduationYear: "",
        graduated: false,
      });
    
      const handleChange= (event)=>{
        const {name, value, type, checked } = event.target;
    
        setForm(val => ({
          ...val,
          [name]:type==="checkbox"? checked: value
        }));
      }
    
      const handleSubmit = (event) => {
        event.preventDefault();
    
        const newList = [{...form}, ...props.students]
    
        props.setStudents(newList);
      }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <span>Add a Student</span>
            <div>
            <label>
                Full Name
                <input name="fullName" type="text" placeholder="Full Name" value={form.fullName} onChange={handleChange}/>
            </label>

            <label>
                Profile Image
                <input name="image" type="url" placeholder="Profile Image" value={form.image} onChange={handleChange}/>
            </label>

            <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone" value={form.phone} onChange={handleChange}/>
            </label>

            <label>
                Email
                <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange}/>
            </label>
            </div>

            <div>
            <label>
                Program
                <select name="program" value={form.program} onChange={handleChange}>
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
                value={form.graduationYear} 
                onChange={handleChange}
                />
            </label>

            <label>
                Graduated
                <input name="graduated" type="checkbox" value={form.graduated} onChange={handleChange}/>
            </label>

            <button type="submit">Add Student</button>
            </div>

        </form>
        </>
    )
}