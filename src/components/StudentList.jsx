import StudentCard from "./StudentCard";

function StudentList({ students }) {
  // Protege contra undefined/null
  if (!students || students.length === 0) {
    return <p>No students yet</p>;
  }

  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard key={student.email} {...student} />
      ))}
    </div>
  );
}

export default StudentList;
