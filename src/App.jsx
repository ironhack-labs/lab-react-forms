import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";
import AddStudent from "./components/AddStudent";
/*
  - https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-1.png
  - https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-2.png
  - https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-4.png
  - https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-6.png
*/
function App() {
    const [students, setStudents] = useState(studentsData);

    return (
        <div className="App pt-20">
            <Navbar />

            <AddStudent
                students={students}
                setStudents={setStudents}
            />

            {/* TABLE/LIST HEADER */}
            <TableHeader />

            {/* STUDENT LIST */}
            {students &&
                students.map((student) => {
                    return (
                        <StudentCard
                            key={student.email}
                            {...student}
                        />
                    );
                })}
        </div>
    );
}

export default App;
