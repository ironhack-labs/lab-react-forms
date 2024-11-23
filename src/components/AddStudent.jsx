import { useState } from "react";

const initialData = {
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false
  }

function AddStudent({ handleAddStudent }) {
    //State variable:
    const [ formData, setFormData ] = useState( initialData );

    //Submit form:
    const onSubmit = event => {
        event.preventDefault();

        const newStudent = { ...formData };

        handleAddStudent( newStudent ); //Add new student 

        //Clear form inputs:
        setFormData( initialData );
    }

    //Change input:
    const onChangeInput = event => {
        const { name, type, value, checked } = event.target;
        setFormData({ ...formData, 
                    [name]: type === "checkbox" ? checked : value //Set event value
                }
        )
    }

    return (
    <>
      <form onSubmit= { onSubmit }>
      <span>Add a Student</span>
      <div>
        <label>
          Full Name
          <input 
            name="fullName"  
            type="text" 
            placeholder="Full Name" 
            value = { formData.fullName }
            onChange = { onChangeInput }
          />
        </label>

        <label>
          Profile Image
          <input 
            name="image" 
            type="url" 
            placeholder="Profile Image" 
            value = { formData.image }
            onChange = { onChangeInput }
         />
        </label>

        <label>
          Phone
          <input 
            name="phone" 
            type="tel" 
            placeholder="Phone" 
            value = { formData.phone }
            onChange = { onChangeInput }
             />
        </label>

        <label>
          Email
          <input 
            name="email" 
            type="email" 
            placeholder="Email" 
            value = { formData.email }
            onChange = { onChangeInput } 
             />
        </label>
      </div>

      <div>
        <label>
          Program
          <select 
            name="program" 
            value= { formData.program }
            onChange = { onChangeInput } 
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
            value = { formData.graduationYear }
            placeholder="Graduation Year"
            minLength={4}
            maxLength={4}
            min={2023}
            max={2030}
            onChange= { onChangeInput }
          />
        </label>

        <label>
          Graduated
          <input 
            name="graduated" 
            type="checkbox" 
            checked = { formData.graduated }
            onChange = { onChangeInput }
            />
        </label>

        <button type="submit">Add Student</button>
      </div>

    </form>
    </>
    );
}

export default AddStudent;