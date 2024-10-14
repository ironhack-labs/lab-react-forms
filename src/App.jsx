import React, { useState } from "react";
import Navbar from "./components/Navbar";
import AddStudent from "./components/AddStudent";
import StudentCard from "./components/StudentCard";
import TableHeader from "./components/TableHeader";
import "./App.css";

const App = () => {
  const [students, setStudents] = useState([
    {
      fullName: "Christine Clayton",
      email: "chris.c@example.com",
      phone: "567-890-1234",
      program: "Web Dev",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-3.png",
      graduationYear: 2023,
      graduated: true,
    },
    {
      fullName: "Grace Green",
      email: "grace.g@example.com",
      phone: "901-234-5678",
      program: "Web Dev",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-7.png",
      graduationYear: 2023,
      graduated: false,
    },
    {
      fullName: "Jack Johnson",
      email: "jack.j@example.com",
      phone: "234-567-8901",
      program: "Web Dev",
      image:
        "https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/lab-cohort-tools-routing/profile-5.png",
      graduationYear: 2024,
      graduated: false,
    },
  ]);

  const handleAddStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container mx-auto mt-20">
        <h1 className="text-2xl font-bold">Cohort Tools</h1>
        <AddStudent onAddStudent={handleAddStudent} />
        <div className="overflow-x-auto mt-5">
          <TableHeader />
          {students.map((student, index) => (
            <StudentCard key={index} {...student} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
