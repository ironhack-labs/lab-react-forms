function TableHeader() {
  return (
    <div className="flex justify-between items-center p-2 font-bold border-b border-gray-300 bg-gray-100 w-full">
      {/* Encabezado de la columna de imagen */}
      <span
        className="flex items-center justify-center"
        style={{ flexBasis: "16%" }}
      >
        <p>Image</p>
      </span>

      {/* Encabezado de las demás columnas */}
      <span style={{ flexBasis: "16%" }}>Name</span>
      <span style={{ flexBasis: "16%" }}>Program</span>
      <span style={{ flexBasis: "16%" }}>Email</span>
      <span style={{ flexBasis: "16%" }}>Phone</span>
      <span style={{ flexBasis: "16%" }}>Graduated</span>
    </div>
  );
}

export default TableHeader;