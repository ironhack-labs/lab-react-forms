import { useState } from "react";

function AddStudent({ handleAddStudent }) {
  // // * * * REFACTORING ALL INPUT FUNCTIONS TO USE ONLY ONE !!!
  // // states to handle form inputs
  // const [ fullNameValue, setFullNameValue ] = useState("")
  // const [ profileImageValue, setProfileImageValue ] = useState("")
  // const [ phoneValue, setPhoneValue ] = useState("")
  // const [ emailValue, setEmailValue ] = useState("")
  // const [ programValue, setProgramValue ] = useState("Web Dev") // uses web dev as default
  // const [ graduationYearValue, setGraduationYearValue ] = useState(2024)
  // const [ graduatedValue, setGraduatedValue ] = useState(false)

  const [formInfo, setFormInfo] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "Web Dev", // default value
    image: "",
    graduationYear: "2024", // default value
    graduated: false, // boolean, checkbox
  });

  // HANDLE ALL FORM INPUT CHANGES WITH ONE FUNCTION
  const handleInputhChanges = (event) => {
    const { name, value, type, checked } = event.target;

    // updates thr formInfo object based on the input type (checkbox vs other)
    setFormInfo((prevInfo) => ({
      ...prevInfo,

      // checks type to find checkbox; if it is, it checks if it's true or false, if not it gets the field value
      // it also works with more checkboxes, even if we have more than one checkbox as part of an array
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // handle form submission
  const handleFormSubmit = (event) => {
    // avoid default settings and refreshing
    event.preventDefault();

    // calling the parten function to add new student info
    handleAddStudent(formInfo);

    // resets the entire form to clear inputs after submit
    setFormInfo({
      fullName: "",
      email: "",
      phone: "",
      program: "Web Dev",
      image: "",
      graduationYear: "2024",
      graduated: false,
    });

    // // NO NEEDED, OBJECT CREATED AT THE BEGINNING
    // // new student object (to create on submit) folowing json
    // const newStudent = {
    //   fullName: fullNameValue,
    //   email: emailValue,
    //   phone: phoneValue,
    //   program: programValue,
    //   image: profileImageValue,
    //   graduationYear: graduationYearValue,
    //   graduated: graduatedValue,
    // }

    // // calls the handleAddStudent function passed to AddStudent.jsx via props
    // handleAddStudent(newStudent)
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {/* NNED TO ADD NEW onChange AND UPDATE value TO formInfoxxx */}

        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input
              onChange={handleInputhChanges}
              name="fullName"
              type="text"
              placeholder="Ada Lovelace"
              value={formInfo.fullName}
            />
          </label>

          <label>
            Profile Image
            <input
              onChange={handleInputhChanges}
              name="image"
              type="url"
              placeholder="Cats"
              value={formInfo.profileImage}
            />
          </label>

          <label>
            Phone
            <input
              onChange={handleInputhChanges}
              name="phone"
              type="tel"
              placeholder="Better Write"
              value={formInfo.phone}
            />
          </label>

          <label>
            Email
            <input
              onChange={handleInputhChanges}
              name="email"
              type="email"
              placeholder="Are You Serious"
              value={formInfo.email}
            />
          </label>
        </div>

        <div>
          <label>
            Program
            <select
              onChange={handleInputhChanges}
              name="program"
              value={formInfo.program}
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
              onChange={handleInputhChanges}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={formInfo.graduationYear}
            />
          </label>

          <label>
            Graduated
            <input
              onChange={handleInputhChanges}
              name="graduated"
              type="checkbox"
              checked={formInfo.graduated}
            />
            {/* value changed !!!! checkbox type */}
          </label>

          <button type="submit">Add Student</button>
        </div>
      </form>
    </>
  );
}

export default AddStudent;
