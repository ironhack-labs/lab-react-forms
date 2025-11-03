import { useState } from 'react'

const AddStudent = ({ addStudents }) => {
	const [formData, setFormData] = useState({
		fullName: '',
		image: '',
		phone: '',
		email: '',
		program: '',
		gradYear: 2023,
		graduated: false,
	})

	const handleChange = (e) => {
		// e.preventDefault()
		const { name, type, value, checked } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: type === 'checkbox' ? checked : value,
		}))
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		addStudents(formData)
		console.log(formData)
	}

	return (
		<>
			{/* FORM */}
			<form>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name="fullName"
							type="text"
							placeholder="Full Name"
							value={formData['fullName']}
							onChange={handleChange}
						/>
					</label>

					<label>
						Profile Image
						<input
							name="image"
							type="url"
							placeholder="Profile Image"
							value={formData['image']}
							onChange={handleChange}
						/>
					</label>

					<label>
						Phone
						<input
							name="phone"
							type="tel"
							placeholder="Phone"
							value={formData['phone']}
							onChange={handleChange}
						/>
					</label>

					<label>
						Email
						<input
							name="email"
							type="email"
							placeholder="Email"
							value={formData['email']}
							onChange={handleChange}
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select
							name="program"
							value={formData['program']}
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
							placeholder="Graduation Year"
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
							value={formData['gradYear']}
							onChange={handleChange}
						/>
					</label>

					<label>
						Graduated
						<input
							name="graduated"
							type="checkbox"
							checked={formData['graduated']}
							onChange={handleChange}
						/>
					</label>

					<button type="submit" onClick={handleSubmit}>
						Add Student
					</button>
				</div>
			</form>
			{/* FORM END */}
		</>
	)
}

export default AddStudent
