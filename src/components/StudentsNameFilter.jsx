import { useState } from "react";

const StudentsNameFilter = ({ filterStudentsByName }) => {
    const [nameQuery, setNameQuery] = useState('');

    const handleNameQuery = event => {
        const { value } = event.target;
        setNameQuery(value);
        filterStudentsByName(value);
    }

    return (
        <div className="StudentFilter">
            <h2>Filter</h2>
            <input
                type="text"
                placeholder="Enter student name to filter"
                value={nameQuery}
                onChange={handleNameQuery}
            />
        </div>
    );
}

export default StudentsNameFilter;
