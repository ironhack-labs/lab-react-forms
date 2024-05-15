import { useState } from "react";

function AddStudent(props) {
  const [formData, setFormData] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });

  // Dynamic input handler funciton that handles all input types
  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const newStudent = { ...formData };
    props.handleAddStudent(newStudent);
    setFormData({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "",
      graduationYear: undefined,
      graduated: false,
    });
  }

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
            onChange={handleChange}
            value={formData.fullName}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            onChange={handleChange}
            value={formData.image}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            onChange={handleChange}
            value={formData.phone}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={formData.program}
            onChange={handleChange}
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
            value={formData.graduationYear}
            onChange={handleChange}
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={formData.graduated}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
// import React from "react";
// import { useState } from "react";

// export default function AddStudent({ setStudents, studentsData }) {
//   const [fullName, setFullName] = useState("");
//   const [image, setImage] = useState("");
//   const [email, setEmail] = useState("");
//   const [tel, setTel] = useState("");
//   const [program, setProgram] = useState(false);
//   const [graduationYear, setGraduationYear] = useState(2023);
//   const [graduated, setGraduated] = useState(false);

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     setFullName("");
//     setImage("");
//     setEmail("");
//     setTel("");
//     setProgram("");
//     setGraduationYear("");
//     setGraduated("");
//   };
//   const handlefullName = (e) => {
//     setFullName(e.target.value);
//   };
//   return (
//     <div>
//       {" "}
//       {/* FORM */}
//       <form onSubmit={handleFormSubmit}>
//         <span>Add a Student</span>
//         <div>
//           <label>
//             Full Name
//             <input
//               name="fullName"
//               type="text"
//               placeholder="Full Name"
//               value={fullName}
//               // onChange={(e) => {
//               //   setFullName(e.target.value);
//               // }}
//               onChange={handlefullName}
//             />
//           </label>

//           <label>
//             Profile Image
//             <input
//               name="image"
//               type="url"
//               placeholder="Profile Image"
//               value={image}
//               onChange={(e) => {
//                 setImage(e.target.value);
//               }}
//             />
//           </label>

//           <label>
//             Phone
//             <input
//               name="phone"
//               type="tel"
//               placeholder="Phone"
//               value={tel}
//               onChange={(e) => {
//                 setTel(e.target.value);
//               }}
//             />
//           </label>

//           <label>
//             Email
//             <input
//               name="email"
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => {
//                 setEmail(e.target.value);
//               }}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Program
//             <select
//               name="program"
//               value={program}
//               onChange={(e) => {
//                 setProgram(e.target.value);
//               }}
//             >
//               <option value="">-- None --</option>
//               <option value="Web Dev">Web Dev</option>
//               <option value="UXUI">UXUI</option>
//               <option value="Data">Data</option>
//             </select>
//           </label>

//           <label>
//             Graduation Year
//             <input
//               name="graduationYear"
//               type="number"
//               placeholder="Graduation Year"
//               minLength={4}
//               maxLength={4}
//               min={2023}
//               max={2030}
//               value={graduationYear}
//               onChange={(e) => {
//                 setGraduationYear(e.target.value);
//               }}
//             />
//           </label>

//           <label>
//             Graduated
//             <input
//               name="graduated"
//               type="checkbox"
//               checked={graduated}
//               onChange={() => {
//                 setGraduated(!graduated);
//               }}
//             />
//           </label>

//           <button
//             onClick={() => {
//               setStudents([
//                 ...studentsData,
//                 {
//                   fullName: fullName,
//                   email: email,
//                   phone: tel,
//                   program: program,
//                   image: image,
//                   graduationYear: graduationYear,
//                   graduated: graduated,
//                 },
//               ]);
//             }}
//             type="submit"
//           >
//             Add Student
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }
