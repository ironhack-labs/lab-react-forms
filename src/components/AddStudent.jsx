import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  // aquí van los estados del formulario
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);
    /*
    function handleChange(evento) {
    const { name, value, type, checked } = evento.target;
    const newValue = type === "checkbox" ? checked : value;

    // actualizamos el estado según el name del campo
    switch (name) {
      case "fullName":
        setFullName(newValue);
        break;
      case "image":
        setImage(newValue);
        break;
      case "phone":
        setPhone(newValue);
        break;
      case "email":
        setEmail(newValue);
        break;
      case "program":
        setProgram(newValue);
        break;
      case "graduationYear":
        setGraduationYear(
          type === "number" ? Number(value) : Number(newValue)
        );
        break;
      case "graduated":
        setGraduated(newValue);
        break;
      default:
        break;
    }
    */ 
   
  // lógica de envío del formulario
  function handleFormSubmit(evento) {
    evento.preventDefault();

    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    //le pasa App
    handleAddStudent(newStudent);

    //Limpia el formulario
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("");
    setGraduationYear(2023);
    setGraduated(false);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(evento) => setFullName(evento.target.value)}
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={image}
            onChange={(evento) => setImage(evento.target.value)}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={(evento) => setPhone(evento.target.value)}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(evento) => setEmail(evento.target.value)}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select
            name="program"
            value={program}
            onChange={(evento) => setProgram(evento.target.value)}
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
            placeholder="Graduation Year"
            value={graduationYear}
            onChange={(evento) =>
              setGraduationYear(Number(evento.target.value))
            }
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
            checked={graduated}
            onChange={(evento) => setGraduated(evento.target.checked)}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;