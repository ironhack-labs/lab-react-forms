import profileIcon from "../assets/profile-icon.png";

function StudentCard({
  fullName,
  email,
  phone,
  program,
  image,
  graduated,
  className,
  deleteStudent,
}) {
  return (
    <div
      className={`StudentCard flex justify-between items-center p-3 mb-2 bg-white shadow-sm rounded border border-gray-200 hover:bg-gray-50 ${
        className || ""
      }`}
    >
      <span
        className="flex items-center justify-center"
        style={{ flexBasis: "14%" }}
      >
        <img
          src={image || profileIcon}
          alt={fullName}
          className="rounded-full w-10 h-10 object-cover border-2 border-gray-300"
        />
      </span>

      <span style={{ flexBasis: "14%" }}>{fullName}</span>
      <span style={{ flexBasis: "14%" }}>{program}</span>
      <span style={{ flexBasis: "14%" }}>{email}</span>
      <span style={{ flexBasis: "14%" }}>{phone}</span>
      <span style={{ flexBasis: "14%" }}>{graduated ? "✅" : "⬜️"}</span>
      <span style={{ flexBasis: "14%" }}>
        <button onClick={() => deleteStudent(email)}>Delete</button>
      </span>
    </div>
  );
}

export default StudentCard;