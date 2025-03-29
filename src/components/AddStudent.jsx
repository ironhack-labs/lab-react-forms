import { useState} from "react";


export default function AddStudent ( {handleAddStudent}) {
    const [formKey, setFormKey] = useState(0);
    const [state, setState] = useState({
        fullName: "",
        image: "",
        phone: "",
        email: "", 
        program: "Web Dev",
        graduationYear: 0,
        graduated: false
    })

     const handleSubmit = (e) => {
        e.preventDefault();
       const newStudent = state

       handleAddStudent(newStudent)
       resetForm();
       setFormKey((prevKey) => prevKey + 1);
     };

     const resetForm = () => {
       console.log("resetting the form");
       setState({
         fullName: "",
         image: "",
         phone: "",
         email: "",
         program: "Web Dev",
         graduationYear: 0,
         graduated: false,
       });
     };

     function handleChange (event) {
        const value = event.target.type === "checkbox" 
        ? event.target.checked 
        : event.target.value;

        setState({
            ...state, 
            [event.target.name]: value

        })
     }

     console.log(state)

    return (
      <>
        {/* FORM */}
        <form key={formKey} onSubmit={handleSubmit}>
          <span>Add a Student</span>
          <div>
            <label>
              Full Name
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                onChange={handleChange}
              />
            </label>

            <label>
              Profile Image
              <input
                name="image"
                type="url"
                placeholder="Profile Image"
                onChange={handleChange}
              />
            </label>

            <label>
              Phone
              <input
                name="phone"
                type="tel"
                placeholder="Phone"
                onChange={handleChange}
              />
            </label>

            <label>
              Email
              <input
                name="email"
                type="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </label>
          </div>

          <div>
            <label>
              Program
              <select
                name="program"
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
                placeholder="Graduation Year"
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
                onChange={handleChange}
              />
            </label>

            <label>
              Graduated
              <input
                name="graduated"
                type="checkbox"
                onChange={handleChange}
              />
            </label>

            <button type="submit">Add Student</button>
          </div>
        </form>
        {/* FORM END */}
      </>
    );
}