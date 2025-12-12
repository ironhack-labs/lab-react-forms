// import { useState } from "react";

// function AddStudent({ handleAddStudent, students }) {
//   const [fullName, setFullName] = useState("");
//   const [image, setImage] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [program, setProgram] = useState("-- None --");
//   const [graduationYear, setGraduationYear] = useState(2023);
//   const [graduated, setGraduated] = useState(false);

//   const handleFullNameChange = (e) => {
//     setFullName(e.target.value);
//   };

//   const handleImageChange = (e) => {
//     setImage(e.target.value);
//   };

//   const handlePhoneChange = (e) => {
//     setPhone(e.target.value);
//   };
//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleProgramChange = (e) => {
//     setProgram(e.target.value);
//   };

//   const handleGraduationYearChange = (e) => {
//     setGraduationYear(e.target.value);
//   };

//   const handleGraduatedChange = (e) => {
//     setGraduated(e.target.checked);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const newStudent = {
//       students,
//       fullName,
//       image,
//       phone,
//       email,
//       program,
//       graduationYear,
//       graduated,
//     };

//     handleAddStudent(newStudent);

//     console.log("Submitted", newStudent);

//     setStudents([newStudent, ...students]);
//     setFullName("");
//     setImage("");
//     setPhone("");
//     setEmail("");
//     setProgram("-- None --");
//     setGraduationYear(2023);
//     setGraduated(false);
//   };

//   return (
//     <div>
//       {/* FORM */}
//       <form onSubmit={handleFormSubmit}>
//         <span>Add a Student</span>
//         <div>
//           <label>
//             Full Name
//             <input
//               name="fullName"
//               type="text"
//               value={fullName}
//               placeholder="Full Name"
//               onChange={handleFullNameChange}
//             />
//           </label>

//           <label>
//             Profile Image
//             <input
//               name="image"
//               type="url"
//               value={image}
//               placeholder="Profile Image"
//               onChange={handleImageChange}
//             />
//           </label>

//           <label>
//             Phone
//             <input
//               name="phone"
//               type="tel"
//               value={phone}
//               placeholder="Phone"
//               onChange={handlePhoneChange}
//             />
//           </label>

//           <label>
//             Email
//             <input
//               name="email"
//               type="email"
//               value={email}
//               placeholder="Email"
//               onChange={handleEmailChange}
//             />
//           </label>
//         </div>

//         <div>
//           <label>
//             Program
//             <select
//               name="program"
//               value={program}
//               onChange={handleProgramChange}
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
//               value={graduationYear}
//               placeholder="Graduation Year"
//               onChange={handleGraduationYearChange}
//               minLength={4}
//               maxLength={4}
//               min={2023}
//               max={2030}
//             />
//           </label>

//           <label>
//             Graduated
//             <input
//               name="graduated"
//               type="checkbox"
//               checked={graduated}
//               onChange={handleGraduatedChange}
//             />
//           </label>

//           <button type="submit">Add Student</button>
//         </div>
//       </form>
//       {/* FORM END */}
//     </div>
//   );
// }
// export default AddStudent;


import React, { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [student, setStudent] = useState({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "-- None --",
    graduationYear: 2023,
    graduated: false,
  });

  const handleInputChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setStudent({
      ...student,
      [e.target.name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleAddStudent(student);
    setStudent({
      fullName: "",
      image: "",
      phone: "",
      email: "",
      program: "-- None --",
      graduationYear: 2023,
      graduated: false,
    });
  };
  
  return (
    <div>
      {/* FORM */}
      <form onSubmit={handleFormSubmit}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              type="text"
              value={student.fullName}
              placeholder="Full Name"
              onChange={handleInputChange}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              type="url"
              value={student.image}
              placeholder="Profile Image"
              onChange={handleInputChange}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              type="tel"
              value={student.phone}
              placeholder="Phone"
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              type="email"
              value={student.email}
              placeholder="Email"
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={student.program}
              onChange={handleInputChange}
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
              value={student.graduationYear}
              placeholder="Graduation Year"
              onChange={handleInputChange}
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
              checked={student.graduated}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}
    </div>
  );
}

export default AddStudent;