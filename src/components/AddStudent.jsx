import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  
  const initialState = {
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "Web Development", 
    graduationYear: 2023,       
    graduated: false,           
  };

  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : name === "graduationYear" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 

    handleAddStudent(formData);

    setFormData(initialState);
  };

  return (
    <form onSubmit={handleSubmit} className="add-student-form">
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input
            name="fullName"
            type="text"
            placeholder="Full Name"
            value={formData.fullName} // Iteração 2: Vinculação do valor
            onChange={handleChange}   // Iteração 2 & 5: Handler
          />
        </label>

        <label>
          Profile Image
          <input
            name="image"
            type="url"
            placeholder="Profile Image"
            value={formData.image}
            onChange={handleChange}
          />
        </label>

        <label>
          Phone
          <input
            name="phone"
            type="tel"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </label>

        <label>
          Email
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Program
          <select name="program" value={formData.program} onChange={handleChange}>
            <option value="Web Development">Web Development</option>
            <option value="UX/UI Design">UX/UI Design</option>
            <option value="Data Analytics">Data Analytics</option>
            <option value="Cybersecurity">Cybersecurity</option>
          </select>
        </label>

        <label>
          Graduation Year
          <input
            name="graduationYear"
            type="number"
            placeholder="Graduation Year"
            min={2023}
            max={2030}
            minLength={4}
            maxLength={4}
            value={formData.graduationYear}
            onChange={handleChange}
          />
        </label>

        <label>
          Graduated
          <input
            name="graduated"
            type="checkbox"
            checked={formData.graduated} // Iteração 2: Checkbox usa 'checked'
            onChange={handleChange}
          />
        </label>

        <button type="submit">Add Student</button>
      </div>
    </form>
  );
}

export default AddStudent;
