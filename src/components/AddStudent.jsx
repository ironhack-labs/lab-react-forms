import { useState } from 'react';

function AddStudent(props) {
  const [fullName, setFullName] = useState('');
  const [image, setImage] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [program, setProgram] = useState('');
  const [graduationYear, setGraduationYear] = useState(2023);
  const [graduated, setGraduated] = useState(false);

  const handleInput = (setState) => {
    return (e) => setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      fullName: fullName,
      email: email,
      phone: phone,
      program: program,
      image: image,
      graduationYear: graduationYear,
      graduated: graduated,
    };

    props.handleAddStudent(newStudent);

    setFullName('');
    setImage('');
    setPhone('');
    setEmail('');
    setProgram('');
    setGraduationYear(2023);
    setGraduated(false);
  };

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
            value={fullName}
            onChange={handleInput(setFullName)}
          />
        </label>

        <label>
          Profile Image
          <input name="image" type="url" placeholder="Profile Image" value={image} onChange={handleInput(setImage)} />
        </label>

        <label>
          Phone
          <input name="phone" type="tel" placeholder="Phone" value={phone} onChange={handleInput(setPhone)} />
        </label>

        <label>
          Email
          <input name="email" type="email" placeholder="Email" value={email} onChange={handleInput(setEmail)} />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={program} onChange={handleInput(setProgram)}>
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
            value={graduationYear}
            onChange={handleInput(setGraduationYear)}
          />
        </label>

        <label>
          Graduated
          <input name="graduated" type="checkbox" checked={graduated} onChange={handleInput(setGraduated)} />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
