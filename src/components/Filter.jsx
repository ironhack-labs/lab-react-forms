import { useState } from "react"

const StudentsYearFilter = ({ filterStudentsByYear }) => {

    const [yearQuery, setYearQuery] = useState(2023)

    const handleYearQuery = event => {
        const { value } = event.target
        setYearQuery(value)
        filterStudentsByYear(value)
    }

    return (
        <div className="StudentsYearFilter">
            <h2>Filtered List</h2>
            <input
                type="number"
                placeholder="2023"
                minLength={4}
                maxLength={4}
                min={2023}
                max={2030}
                value={yearQuery}
                onChange={handleYearQuery}
            />
        </div>
    )
}

export default StudentsYearFilter