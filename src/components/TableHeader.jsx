function TableHeader() {
  return (
    <div className="flex justify-between items-center p-2 font-bold border-b w-full">
      <span
        className="flex items-center justify-center m-left-2"
        style={{ flexBasis: "14%" }}
      >
        <p>Image</p>
      </span>
      <span style={{ flexBasis: "14%" }}>Name</span>
      <span style={{ flexBasis: "14%" }}>Program</span>
      <span style={{ flexBasis: "14%" }}>Email</span>
      <span style={{ flexBasis: "14%" }}>Phone</span>
      <span style={{ flexBasis: "14%" }}>Graduated</span>
      <span style={{ flexBasis: "14%" }}>Actions</span>
    </div>
  );
}

export default TableHeader;