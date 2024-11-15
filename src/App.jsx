import './App.css'
import { useState } from 'react'
import Navbar from './components/Navbar'
import TableHeader from './components/TableHeader'
import StudentCard from './components/StudentCard'

import studentsData from './assets/students.json'

function App() {
	const [students, setStudents] = useState(studentsData)
	const [newStudent, setNewStudent] = useState({
		fullName: '',
		email: '',
		phone: '',
		program: '',
		image: '',
		graduationYear: 2023,
		graduated: false,
	})
	const {
		fullName,
		email,
		phone,
		program,
		image,
		graduationYear,
		graduated,
	} = newStudent
	return (
		<div className='App pt-20'>
			<Navbar />

			{/* FORM */}
			<form
				onSubmit={(e) => {
					e.preventDefault()
					setStudents([...students, newStudent])
					newStudent = {
						fullName: '',
						email: '',
						phone: '',
						program: '',
						image: '',
						graduationYear: 2023,
						graduated: false,
					}
				}}
			>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							value={fullName}
							name='fullName'
							type='text'
							placeholder='Full Name'
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									fullName: e.target.value,
								})
							}}
						/>
					</label>

					<label>
						Profile Image
						<input
							value={image}
							name='image'
							type='url'
							placeholder='Profile Image'
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									image: e.target.value,
								})
							}}
						/>
					</label>

					<label>
						Phone
						<input
							value={phone}
							name='phone'
							type='tel'
							placeholder='Phone'
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									phone: e.target.value,
								})
							}}
						/>
					</label>

					<label>
						Email
						<input
							value={email}
							name='email'
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									email: e.target.value,
								})
							}}
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select
							name='program'
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									program: e.target.value,
								})
							}}
						>
							<option value=''>-- None --</option>
							<option value='Web Dev'>Web Dev</option>
							<option value='UXUI'>UXUI</option>
							<option value='Data'>Data</option>
						</select>
					</label>

					<label>
						Graduation Year
						<input
							value={graduationYear}
							name='graduationYear'
							type='number'
							placeholder='Graduation Year'
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									graduationYear: e.target.value,
								})
							}}
						/>
					</label>

					<label>
						Graduated
						<input
							value={graduated}
							name='graduated'
							type='checkbox'
							onChange={(e) => {
								setNewStudent({
									...newStudent,
									graduated: e.target.checked,
								})
							}}
						/>
					</label>

					<button type='submit'>Add Student</button>
				</div>
			</form>
			{/* FORM END */}

			{/* TABLE/LIST HEADER */}
			<TableHeader />

			{/* STUDENT LIST */}
			{students &&
				students.map((student) => {
					return <StudentCard key={student.email} {...student} />
				})}
		</div>
	)
}

export default App
