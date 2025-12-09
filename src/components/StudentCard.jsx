function StudentCard({ fullName, email, phone, program, image, graduationYear, graduated }) {
  return (
    <div className="grid grid-cols-7 items-center bg-white shadow rounded p-2">
      <img src={image} alt={fullName} className="h-12 w-12 object-cover rounded-full" />
      <span>{fullName}</span>
      <span>{email}</span>
      <span>{phone}</span>
      <span>{program}</span>
      <span>{graduationYear}</span>
      <span>{graduated ? "Yes" : "No"}</span>
    </div>
  );
}

export default StudentCard;
