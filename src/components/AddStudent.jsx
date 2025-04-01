import { useState } from "react";
// import studentsData from "./assets/students.json";

function AddStudent({handleAddStudent}){

    const [formData, setFormData] = useState({
        fullName: "",
        image: "",
        phone: "",
        email: "",
        program: "",
        graduationYear: 2023,
        graduated: false,
      });

      const handleFormSubmit = (e) => {
        e.preventDefault();
    
        const newStudent = {
          fullName: formData.fullName,
          image: formData.image,
          phone: formData.phone,
          email: formData.email,
          program: formData.program,
          graduationYear: Number(formData.graduationYear),
          graduated: formData.graduated,
        };
    
        handleAddStudent(newStudent);
      }
    
      const handleInputChange = (e) => {
        const {name, value, type, checked} = e.target;
    
        setFormData((prevData) => ({
          ...prevData,
          [name]: type==="checkbox" ? checked : value,
        }));
      };

      return(
       <>
             {/* FORM */}
                <form onSubmit={handleFormSubmit}> {/* changed */}
                <span>Add a Student</span>
                <div>
                    <label>
                    Full Name
                    <input name="fullName" type="text" placeholder="Full Name" value={formData.fullName} onChange={handleInputChange}/>
                    </label>

                    <label>
                    Profile Image
                    <input name="image" type="url" placeholder="Profile Image" value={formData.image} onChange={handleInputChange}/>
                    </label>

                    <label>
                    Phone
                    <input name="phone" type="tel" placeholder="Phone" value={formData.phone} onChange={handleInputChange}/>
                    </label>

                    <label>
                    Email
                    <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleInputChange}/>
                    </label>
                </div>

                <div>
                    <label>
                    Program
                    <select name="program" value={formData.program} onChange={handleInputChange}>
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
                        // minLength={4}
                        // maxLength={4}
                        min={2023}
                        max={2030}
                        value={formData.graduationYear} onChange={handleInputChange}
                    />
                    </label>

                    <label>
                    Graduated
                    <input name="graduated" type="checkbox" checked={formData.graduated} onChange={handleInputChange}/>
                    </label>

                    <button type="submit">Add Student</button>
                </div>

                </form>
            {/* FORM END */}
       </>
      )
}

export default AddStudent;