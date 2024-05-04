import { useState } from "react"

const StudentsFilter = ({ filterStudentsByName }) => {

  const [nameQuery, setNameQuery] = useState('')

  const handleNameChange = event => {
    const { value } = event.target
    setNameQuery(value)
    filterStudentsByName(value)
  }


  return (
    <div className="StudentsFilter">
      <h2><strong>Filtrado</strong></h2>
      <input type="text" value={nameQuery} onChange={handleNameChange} placeholder="Nombre del alumno" />
    </div>
  )
}

export default StudentsFilter