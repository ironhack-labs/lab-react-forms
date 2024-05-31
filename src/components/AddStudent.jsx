import React, { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
  const [data, setData] = useState({
    fullName: '',
    url: '',
    tel: '',
    email: '',
    graduated: false,
    program: '-- None --',
    graduationYear: 2023,
  });

  function handleChange(evt) {
    const { name, value, type, checked } = evt.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newStudent = {
      fullName: data.fullName,
      email: data.email,
      phone: data.tel,
      program: data.program,
      image: data.url,
      graduationYear: data.graduationYear,
      graduated: data.graduated,
    };
    handleAddStudent(newStudent);

    setData({
      fullName: '',
      url: '',
      tel: '',
      email: '',
      graduated: false,
      program: '-- None --',
      graduationYear: 2023,
    });
  }


	return (
		<div>
			{/* FORM */}
			<form onSubmit={handleSubmit}>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name="fullName"
							type="text"
							value={data.name}
							onChange={handleChange}
							placeholder="Full Name"
						/>
					</label>

					<label>
						Profile Image
						<input
							name="url"
							type="url"
							value={data.url}
							onChange={handleChange}
							placeholder="Profile Image"
						/>
					</label>

					<label>
						Phone
						<input
							name="tel"
							type="tel"
							value={data.tel}
							onChange={handleChange}
							placeholder="Phone"
						/>
					</label>

					<label>
						Email
						<input
							name="email"
							type="email"
							value={data.email}
							onChange={handleChange}
							placeholder="Email"
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select
							name="program"
							value={data.program}
							onChange={handleChange}
						>
							<option value="">-- None --</option>
							<option value="Web Dev">Web Dev</option>
							<option value="UXUI">UXUI</option>
							<option value="Data">Data</option>
						</select>
					</label>

					<label>
						Graduation Year
						<input
							name="graduationYear"
							type="number"
							value={data.graduationYear}
							onChange={handleChange}
							placeholder="Graduation Year"
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
						/>
					</label>

					<label>
						Graduated
						<input
							name="graduated"
							type="checkbox"
							checked={data.graduated}
							onChange={handleChange}
						/>
					</label>

					<button type="submit">Add Student</button>
				</div>
			</form>
			{/* FORM END */}
		</div>
	);
};
export default AddStudent;
