import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";
import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";
function App() {
  const [students, setStudents] = useState(studentsData);

  /***************/
  // WIHTOUT REFRACTOR
  /***************/  
  // const [name,setName] =useState("");
  // const [imgUrl,setImgUrl] =useState("");
  // const [phone,setPhone] =useState("");
  // const [email,setEmail] =useState("");
  // const [year,setYear] =useState("");
  // const [stat,setStat] =useState(false);
  // console.log(name,imgUrl,phone,email)


  // const handleSubmit = (event)=>{
  //   event.preventDefault();
  //   const studentObj ={
  //     fullName: name,
  //     email: email,
  //     phone: phone,
  //     program: "Web Dev",
  //     image: imgUrl,
  //     graduationYear: year,
  //     graduated: stat
  //   }

  //   const newList = [studentObj, ...students];
  //   setStudents(newList);
  // }

  /***************/ 
  // REFRACTORED
  /***************/
  // const [form, setForm] =useState({
  //   fullName: "",
  //   image: "",
  //   phone: "",
  //   email: "",
  //   program: "",
  //   graduationYear: "",
  //   graduated: false,
  // });

  // const handleChange= (event)=>{
  //   const {name, value, type, checked } = event.target;

  //   setForm(val => ({
  //     ...val,
  //     [name]:type==="checkbox"? checked: value
  //   }));
  // }

  // const handleSubmit = (event) => {
  //   event.preventDefault();

  //   const newList = [{...form}, ...students]

  //   setStudents(newList);
  // }


  return (
    <div className="App pt-20">
      <Navbar />
      <AddStudent students={students} setStudents={setStudents}/>
      {/* FORM */}
      {/* <form onSubmit={handleSubmit}>
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

      </form> */}
      {/* FORM END */}

      
      {/* TABLE/LIST HEADER */}
      <TableHeader />


      {/* STUDENT LIST */}
      {students &&
        students.map((student) => {
          return <StudentCard key={student.email} {...student} />;
        })}
    </div>
  );
}

export default App;
