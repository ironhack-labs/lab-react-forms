import { useState } from "react";
import StudentsData from "../assets/students.json";
import StudentCard from "./StudentCard";
import StudentForm from "./StudentForm";
import StudentsNameFilter from "./StudentsNameFilter";

function StudentList() {
    const [students, setStudents] = useState(StudentsData);
    const [studentsBackup, setStudentsBackup] = useState(StudentsData);

    const addNewStudent = studentToAdd => {
        const newStudent = [studentToAdd, ...students];
        setStudents(newStudent);

        const newStudentBackup = [studentToAdd, ...studentsBackup];
        setStudentsBackup(newStudentBackup);
    }

    const filterStudentsByName = query => {
        const filteredStudents = studentsBackup.filter(elm => elm.fullName.toLowerCase().includes(query));
        setStudents(filteredStudents);
    }

    return (
        <div>
            <h2>Students List</h2>
            <hr />
            <StudentForm addNewStudent={addNewStudent} />
            <hr />
            <StudentsNameFilter filterStudentsByName={filterStudentsByName} />
            <hr />
            {students.map(student => {
                return <StudentCard key={student.email} {...student} />;
            })}
        </div>
    );
}

export default StudentList;
