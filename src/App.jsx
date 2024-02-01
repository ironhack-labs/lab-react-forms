import './App.css';
import { useState } from 'react';
import Navbar from './components/Navbar';
import TableHeader from './components/TableHeader';
import StudentCard from './components/StudentCard';
import studentsData from './assets/students.json';

function App() {
	const [students, setStudents] = useState(studentsData);
	const [formData, setFormData] = useState({
		fullName: '',
		image: '',
		phone: '',
		email: '',
		program: '-- None --',
		graduationYear: '',
		graduated: false,
	});

	const handleInputChange = (e) => {
		const { name, value, type, checked } = e.target;
		// If the input is a checkbox, use checked value, else use value
		const inputValue = type === 'checkbox' ? checked : value;

		setFormData((prevData) => ({
			...prevData,
			[name]: inputValue,
		}));
	};
	const handleFormSubmit = (e) => {
		e.preventDefault();
		// Create a new student object from the form data
		const newStudent = { ...formData };
		// Add the new student to the existing students array
		setStudents((prevStudents) => [...prevStudents, newStudent]);
		// Clear the form data after submission
		setFormData({
			fullName: '',
			image: '',
			phone: '',
			email: '',
			program: '-- None --',
			graduationYear: '',
			graduated: false,
		});
	};
	return (
		<div className="App pt-20">
			<Navbar />

			{/* FORM */}
			<form onSubmit={handleFormSubmit}>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name="fullName"
							type="text"
							placeholder="Full Name"
							value={students.fullName}
							onChange={handleInputChange}
						/>
					</label>

					<label>
						Profile Image
						<input
							name="image"
							type="url"
							placeholder="Profile Image"
							value={students.image}
							onChange={handleInputChange}
						/>
					</label>

					<label>
						Phone
						<input
							name="phone"
							type="tel"
							placeholder="Phone"
							value={students.phone}
							onChange={handleInputChange}
						/>
					</label>

					<label>
						Email
						<input
							name="email"
							type="email"
							placeholder="Email"
							value={students.email}
							onChange={handleInputChange}
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select name="program" onChange={handleInputChange}>
							<option value={students.program}>-- None --</option>
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
							value={students.graduationYear}
							placeholder="Graduation Year"
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
							onChange={handleInputChange}
						/>
					</label>

					<label>
						Graduated
						<input
							name="graduated"
							type="checkbox"
							checked={students.graduated}
							onChange={handleInputChange}
						/>
					</label>

					<button type="submit">Add Student</button>
				</div>
			</form>
			{/* FORM END */}

			{/* TABLE/LIST HEADER */}
			<TableHeader />

			{/* STUDENT LIST */}
			{students &&
				students.map((student) => {
					return <StudentCard key={student.email} {...student} />;
				})}
		</div>
	);
}

export default App;
