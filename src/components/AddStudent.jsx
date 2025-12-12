import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  const [fullName, setFullName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [isGraduate, setIsGraduate] = useState(false);

  // example url : https://images.pexels.com/photos/188029/pexels-photo-188029.jpeg

  function handleSubmitForm(e) {
    e.preventDefault();
    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: profileImage,
      graduationYear: graduationYear,
      graduated: isGraduate,
    };
    // console.log("student added:", newStudent);
    handleAddStudent(newStudent);
  }
  return (
    <>
      {/* FORM */}
      <form onSubmit={handleSubmitForm}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              name="fullName"
              value={fullName}
              type="text"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
          </label>

          <label>
            Profile Image
            <input
              name="image"
              value={profileImage}
              type="url"
              placeholder="Profile Image"
              onChange={(e) => setProfileImage(e.target.value)}
            />
          </label>

          <label>
            Phone
            <input
              name="phone"
              value={phone}
              type="tel"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>

          <label>
            Email
            <input
              name="email"
              value={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              name="program"
              value={program}
              onChange={(e) => setProgram(e.target.value)}
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
              value={graduationYear}
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              onChange={(e) => setGraduationYear(e.target.value)}
            />
          </label>

          <label>
            Graduated
            <input
              name="graduated"
              checked={isGraduate}
              type="checkbox"
              onChange={(e) => setIsGraduate(e.target.value)}
            />
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
      {/* FORM END */}
    </>
  );
}
export default AddStudent;
