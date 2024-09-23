import React from 'react'
import { useState } from 'react';

export default function AddStudent({students, setStudents, handleAddStudent}) {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [select, setSelect] = useState("-- None --");
  const [number, setNumber] = useState(2023);

  const handleText = (event) => {
    setText(event.target.value)
  }
  const handleUrl = (event) => {
    setUrl(event.target.value)
  } 
  const handleTel = (event) => {
    setTel(event.target.value)
  } 
  const handleEmail = (event) => {
    setEmail(event.target.value)
  } 
  
  const handleCheckbox = (event) => {
    setCheckbox(event.target.checked)
  } 
  const handleSelect = (event) => {
    setSelect(event.target.value)
  } 
  const handleNumber = (event) => {
    setNumber(event.target.value)
  } 

  const handleNew = (event) =>{
    event.preventDefault()

    const newStudent = {
      fullName: text,
      image: url,
      phone: tel,
      email: email,
      program: select,
      graduationYear: number,
      graduated: checkbox
    }
  
    setStudents((valor) => {
      const clone = [...valor]
      clone.unshift(newStudent)
      return clone
    })

    //correción: aplicar actualización de contenido
    setText(''); 
    setUrl(''); 
    setTel(''); 
    setEmail(''); 
    setCheckbox(false); 
    setSelect('-- None --'); 
    setNumber(2023);
  }
 



  return (
    <div>
        {/* FORM */}
      <form onSubmit={handleNew}>
        <span>Add a Student</span>
        <div>
          <label>
            Full Name
            <input onChange={handleText} name="fullName" type="text" placeholder="Full Name" value={text}/>
          </label>

          <label>
            Profile Image
            <input onChange={handleUrl} name="image" type="url" placeholder="Profile Image" value={url}/>
          </label>

          <label>
            Phone
            <input onChange={handleTel} name="phone" type="tel" placeholder="Phone" value={tel} />
          </label>

          <label>
            Email
            <input onChange={handleEmail} name="email" type="email" placeholder="Email" value={email} />
          </label>
        </div>

        <div>
          <label>
            Program
            <select name="program" onChange={handleSelect} value={select}>
              <option value="">-- None --</option>
              <option value="Web Dev">Web Dev</option>
              <option value="UXUI">UXUI</option>
              <option value="Data">Data</option>
            </select>
          </label>

          <label>
            Graduation Year
            <input
            onChange={handleNumber}
              name="graduationYear"
              type="number"
              placeholder="Graduation Year"
              minLength={4}
              maxLength={4}
              min={2023}
              max={2030}
              value={number}
            />
          </label>

          <label>
            Graduated
            <input onChange={handleCheckbox} name="graduated" type="checkbox" checked={checkbox}/>
          </label>

          <button type="submit">Add Student</button>
        </div>

      </form>
      {/* FORM END */}
    </div>
  )
}
