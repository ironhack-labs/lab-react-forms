import { useState } from "react";

function AddStudent({ students, setStudents }) {
	const [stateObj, setStateObj] = useState({
		fullName: "",
		profileImage: "",
		phone: "",
		email: "",
		program: "",
		graduationYear: 2023,
		graduated: false,
	});

	const handleform = (e) => {
		e.preventDefault();
		console.log(e);

		const newStudent = {
			fullName: stateObj.fullName,
			profileImage: stateObj.profileImage,
			phone: stateObj.phone,
			email: stateObj.email,
			program: stateObj.program,
			graduationYear: stateObj.graduationYear,
			graduated: stateObj.graduated,
		};

		const newList = [newStudent, ...students];

		setStudents(newList);
	};
	return (
		<div>
			{/* FORM */}
			<form>
				<span>Add a Student</span>
				<div>
					<label>
						Full Name
						<input
							name="fullName"
							type="text"
							value={stateObj.fullName}
							onChange={(e) => {
								setStateObj({ ...stateObj, fullName: e.target.value });
							}}
							placeholder="Full Name"
						/>
					</label>

					<label>
						Profile Image
						<input
							name="image"
							type="url"
							value={stateObj.profileImage}
							onChange={(e) => {
								setStateObj({ ...stateObj, profileImage: e.target.value });
							}}
							placeholder="Profile Image"
						/>
					</label>

					<label>
						Phone
						<input
							name="phone"
							type="tel"
							value={stateObj.phone}
							onChange={(e) => {
								setStateObj({ ...stateObj, phone: e.target.value });
							}}
							placeholder="Phone"
						/>
					</label>

					<label>
						Email
						<input
							name="email"
							type="email"
							value={stateObj.email}
							onChange={(e) => {
								setStateObj({ ...stateObj, email: e.target.value });
							}}
							placeholder="Email"
						/>
					</label>
				</div>

				<div>
					<label>
						Program
						<select
							name="program"
							value={stateObj.program}
							onChange={(e) => {
								setStateObj({ ...stateObj, program: e.target.value });
							}}
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
							value={stateObj.graduationYear}
							onChange={(e) => {
								setStateObj({ ...stateObj, graduationYear: e.target.value });
							}}
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
							checked={stateObj.graduated}
							onChange={(e) => {
								setStateObj({ ...stateObj, graduated: e.target.checked });
							}}
						/>
					</label>

					<button type="submit" onClick={handleform}>
						Add Student
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddStudent;
