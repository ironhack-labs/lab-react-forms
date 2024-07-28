import { useState } from "react"
import students from "./../../Data/students.json"
import StudentForm from "../StudentForm/StudentForm"

const StudentList = () => {

    const [student, setStudent] = useState(students)

    const addNewStudent = newStudent => {
        const fullStudentList = [newStudent, ...student]
        setStudent(fullStudentList)
    }

    return (
        <div className="StudentList">

            <StudentForm addNewStudent={addNewStudent} />


        </div>

    )
}

export default StudentList