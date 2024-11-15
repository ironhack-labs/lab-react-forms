import { useState } from 'react';

const AddStudent = ({ handleAddStudent }) => {
	const [student, setStudent] = useState({
		fullName: '',
		email: '',
		phone: '',
		program: '',
		image: '',
		graduationYear: 2023,
		graduated: false,
	});

	const updateStudent = e => {
		setStudent({
			...student,
			[e.target.name]:
				e.target.type === 'checkbox' ? e.target.checked : e.target.value,
		});
	};

	const addStudent = e => {
		e.preventDefault();
		handleAddStudent(student);
	};

	return (
		<div>
			{/* FORM */}
			<form onSubmit={addStudent}>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name='fullName'
							type='text'
							placeholder='Full Name'
							value={student.fullName}
							onChange={updateStudent}
						/>
					</label>

					<label>
						Profile Image
						<input
							name='image'
							type='url'
							placeholder='Profile Image'
							value={student.image}
							onChange={updateStudent}
						/>
					</label>

					<label>
						Phone
						<input
							name='phone'
							type='tel'
							placeholder='Phone'
							value={student.phone}
							onChange={updateStudent}
						/>
					</label>

					<label>
						Email
						<input
							name='email'
							type='email'
							placeholder='Email'
							value={student.email}
							onChange={updateStudent}
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select
							name='program'
							value={student.program}
							onChange={updateStudent}
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
							name='graduationYear'
							type='number'
							placeholder='Graduation Year'
							minLength={4}
							maxLength={4}
							min={2023}
							max={2030}
							value={student.graduationYear}
							onChange={updateStudent}
						/>
					</label>

					<label>
						Graduated
						<input
							name='graduated'
							type='checkbox'
							checked={student.graduated}
							onChange={updateStudent}
						/>
					</label>

					<button type='submit'>Add Student</button>
				</div>
			</form>
			{/* FORM END */}
		</div>
	);
};

export default AddStudent;
