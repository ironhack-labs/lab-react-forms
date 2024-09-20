import { useState } from "react";

function AddStudent ({handleAddStudent}){

    const [student, setStudent] = useState({
        fullName: "",
        email:  "",
        phone: "",
        program: "",
        image: "",
        graduationYear: 2023,
        graduated: false
    })

    // const handleFullName = (event) => setFullName(event.target.value);
    const handleChange = (event) => {
        const studentClone = structuredClone(student);

        if(event.target.name === "graduated") studentClone[event.target.name] = event.target.checked;
        else studentClone[event.target.name] = event.target.value;
        
        setStudent(studentClone);
    }

    return(
      <form onSubmit={() => {
        handleAddStudent(event, student)
        setStudent({
          fullName: "",
          email:  "",
          phone: "",
          program: "",
          image: "",
          graduationYear: 2023,
          graduated: false
      });
      }}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleChange} value={student["fullName"]} name="fullName" type="text" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={handleChange} value={student["image"]} name="image" type="url" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={handleChange} value={student["phone"]} name="phone" type="tel" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={handleChange} value={student["email"]} name="email" type="email" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select onChange={handleChange} value={student["program"]} name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={handleChange} 
              value={student["graduationYear"]}
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
            <input onChange={handleChange} value={student["graduated"]} name="graduated" type="checkbox" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>

    );
}

export default AddStudent;