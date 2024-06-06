import React from "react";

function AddStudent({ students }) {
  return (
    <div>
      {students.map((student) => (
        <div key={student.id}>
          <span>
            <img src={student.HandleImage} />
          </span>
          <span> {student.fullName}</span>
          <span>{student.HandleProgram}</span>
          <span>{student.HandleEmail}</span>
          <span>{student.Handlehone}</span>
          <span>{student.HandleGraduated}</span>
        </div>
      ))}
    </div>
  );
}

export default AddStudent;
