import { useState } from "react";

function FormStudent({ students, setStudents }) {
  const [fullName, setFullName] = useState("");
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("Web Dev");
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      fullName,
      image,
      phone,
      email,
      program,
      graduationYear,
      graduated,
    };

    setStudents([...students, newStudent]);

    // Limpiar formulario
    setFullName("");
    setImage("");
    setPhone("");
    setEmail("");
    setProgram("Web Dev");
    setGraduationYear(2023);
    setGraduated(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-4 mb-8">
      <h2 className="text-lg font-bold mb-4">Add a Student</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />

        <input
          type="url"
          placeholder="Profile Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="tel"
          placeholder="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded w-full"
          required
        />

        <select
          value={program}
          onChange={(e) => setProgram(e.target.value)}
          className="border p-2 rounded w-full"
        >
          <option value="Web Dev">Web Dev</option>
          <option value="UXUI">UXUI</option>
          <option value="Data">Data</option>
        </select>

        <input
          type="number"
          placeholder="Graduation Year"
          value={graduationYear}
          min={2023}
          max={2030}
          onChange={(e) => setGraduationYear(Number(e.target.value))}
          className="border p-2 rounded w-full"
        />

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={graduated}
            onChange={(e) => setGraduated(e.target.checked)}
          />
          <span>Graduated</span>
        </label>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Add Student
      </button>
    </form>
  );
}

export default FormStudent;
