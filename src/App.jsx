import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import TableHeader from "./components/TableHeader";
import StudentCard from "./components/StudentCard";

import studentsData from "./assets/students.json";

function App() {
	const [students, setStudents] = useState(studentsData);
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [image, setImage] = useState("");
	const [program, setProgram] = useState();
	const [graduated, setGraduation] = useState(false);
	const [graduationYear, setGraduationYear] = useState(2023);

	const handleFullName = (e) => setFullName(e.target.value);
	const handleEmail = (e) => setEmail(e.target.value);
	const handlePhone = (e) => setPhone(e.target.value);
	const handleImage = (e) => setImage(e.target.value);
	const handleProgram = (e) => setProgram(e.target.value);
	const handleGraduationYear = (e) => setGraduationYear(e.target.value);
	const handleGraduation = (e) => setGraduation(e.target.checked);
 
	const handleSubmit = (e) => {
		e.preventDefault();
		const newStudent = {
			fullName,
			email,
			phone,
			graduationYear,
			graduated,
			image,
			program,
		};
		setStudents([...students, newStudent]); // Añado el nuevo estudiante
		console.log("Submitted: ", newStudent);
		
		setFullName("");
		setEmail("");
		setPhone("");
		setImage("");
		setProgram("");
		setGraduation(false)
		setGraduationYear(0);

	
	};
	return (
		<div className="App pt-20">
			<Navbar />

			{/* FORM */}
			<form onSubmit={handleSubmit}>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name="fullName"
							type="text"
							value={fullName}
							onChange={handleFullName}
							placeholder="Full Name"
						/>
					</label>

					<label>
						Profile Image
						<input
							name="image"
							type="url"
							value={image}
							onChange={handleImage}
							placeholder="Profile Image"
						/>
					</label>

					<label>
						Phone
						<input
							name="phone"
							type="tel"
							value={phone}
							onChange={handlePhone}
							placeholder="Phone"
						/>
					</label>

					<label>
						Email
						<input
							name="email"
							type="email"
							value={email}
							onChange={handleEmail}
							placeholder="Email"
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select name="program" value={program} onChange={handleProgram}>
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
							value={graduationYear}
							onChange={handleGraduationYear}
						/>
					</label>

					<label>
						Graduated
						<input
							name="graduated"
							onChange={handleGraduation}
							checked={graduated}
							value ={graduated}
							type="checkbox"
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
