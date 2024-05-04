import { useState } from "react"

const StudentsNameFilter = ({ filterStudentsByName }) => {

    const [nameQuery, setNameQuery] = useState('')

    const handleNameQuery = event => {
        const { value } = event.target
        setNameQuery(value)
        filterStudentsByName(value)
    }

    return (
        <div className="StudentsNameFilter">
            <h2>Students Filter</h2>
            <input
                type="text"
                value={nameQuery}
                onChange={handleNameQuery}
            />
        </div>
    )
}

export default StudentsNameFilter