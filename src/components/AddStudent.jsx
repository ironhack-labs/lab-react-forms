function AddStudent ({students, setStudents}) {
    
    const [fullName, setFullName] = useState("");
    const [image, setImage] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [graduationYear, setGraduationYear] = useState (2023);
    const [graduated, setGraduated] = useState(false);
    
  
    const handleFullName = (e) => setFullName(e.target.value);
    const handleImage = (e) => setImage(e.target.value);
    const handlePhone = (e) => setPhone(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleGraduationYear = (e) => setGraduationYear(e.target.value);
  const handleGraduated =(e)=> setGraduated(e.target.checked);
  
  const handleSubmit = (e)=> {
    e.preventDefault();
  const newStudent = {fullName, image, phone, email, graduationYear, graduated};
  setStudents([newStudent, ...studentsData]) };
    return(
    <>
    <div className="App pt-20">
      <Navbar />

      {/* FORM */}
      <form onSubmit={handleSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleFullName} name="fullName" type="" placeholder="Full Name" />
          </label>

          <label>
            Profile Image
            <input onChange={handleImage} name="image" type="" placeholder="Profile Image" />
          </label>

          <label>
            Phone
            <input onChange={handlePhone} name="phone" type="" placeholder="Phone" />
          </label>

          <label>
            Email
            <input onChange={handleEmail} name="email" type="" placeholder="Email" />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program">
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
              onChange={handleGraduationYear}
              name="graduationYear"
              type={0}
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
            />
          </label>

          <label>
            Graduated
            <input onChange={handleGraduated} name="graduated" type="false" />
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}


      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
    </>
)

}
export default AddStudent