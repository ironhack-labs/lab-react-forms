import { useState } from 'react';



export const AddStudent = ({students, setStudents}) => {

    const [fullName, setFullName] = useState("");  
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [program, setProgram] = useState("-- None --");
    const [graduationYear, setGraduationYear] = useState("");
    const [graduated, setGraduated] = useState(false);

    const handleCreateStudent = (event) => {
        //first always prevent the default refresh of the form
        event.preventDefault();
        const newStudent = { fullName, image, phone, email, program, graduationYear, graduated};
        console.log("here are our states", newStudent);
        setStudents([newStudent, ...students]);
    
        //this will navigate after we add the pet
        // nav("/");
      };
  return (
    <div>
        <form onSubmit={handleCreateStudent}>
            <span>Add a Student</span>
            <div>
            <label>
                Full Name
                <input name="fullName" type="text" placeholder="Full Name" value={fullName} onChange={(event) => {
                setFullName(event.target.value)
                }}
                />
            </label>
    
            <label>
                Profile Image
                <input name="image" type="url" placeholder="Profile Image" value={image} onChange={(event) => {
                setImage(event.target.value)
                }} />
            </label>
    
            <label>
                Phone
                <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={(event) => {
                setPhone(event.target.value)
                }} />
            </label>
    
            <label>
                Email
                <input name="email" type="email" placeholder="Email" value={email} onChange={(event) => {
                setEmail(event.target.value)
                }}/>
            </label>
            </div>
    
            <div>
            <label>
                Program
                <select name="program" value={program} onChange={(event) => {
                setProgram(event.target.value)
                }}>
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
                value={graduationYear}
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
                onChange={(event) => {
                    setGraduationYear(event.target.value)
                }}
                />
            </label>

            <label>
            Graduated
            <input name="graduated" type="checkbox" value={false}
                onChange={(event) => {
                    setGraduated(event.target.value)
                }} />
          </label>

            </div>
            <button type="submit">Add Student</button>
        </form>
    </div>
  )
}
