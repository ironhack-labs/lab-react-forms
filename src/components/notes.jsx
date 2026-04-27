const handleFormSubmit = (e) => {
  e.preventDefault(); // 🚨 prevents page refresh

  const newStudent = {
    ...formData,
    _id: Date.now().toString(), // simple unique id
  };

  setStudents((prevStudents) => [newStudent, ...prevStudents]);

  // Reset form
  setFormData({
    fullName: "",
    image: "",
    phone: "",
    email: "",
    program: "",
    graduationYear: 2023,
    graduated: false,
  });
};