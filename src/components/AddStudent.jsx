import { useState } from "react";
function AddStudent(props) {
	// const [fullName, setFullName] = useState("");
	// const [image, setImage] = useState(
	// 	"https://randomuser.me/api/portraits/lego/7.jpg"
	// );
	// const [phone, setPhone] = useState("");
	// const [email, setEmail] = useState("");
	// const [program, setProgram] = useState("");
	// const [graduationYear, setGraduationYear] = useState(2023);
	// const [graduated, setGraduated] = useState(false);

	const [state, setState] = useState({
		fullName: "",
		image: "https://randomuser.me/api/portraits/lego/7.jpg",
		phone: "",
		email: "",
		program: "",
		graduationYear: 2023,
		graduated: false,
	});

	// const handleFullName = (e) => setFullName(e.target.value);
	// const handleImage = (e) => setImage(e.target.value);
	// const handlePhone = (e) => setPhone(e.target.value);
	// const handleEmail = (e) => setEmail(e.target.value);
	// const handleProgram = (e) => setProgram(e.target.value);
	// const handleGraduationYear = (e) => setGraduationYear(e.target.value);
	// const handleGraduated = (e) => setGraduated(!graduated);

	const handleInput = (event) => {
		const value = event.target.value;
		setState({
			...state,
			[event.target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const newStudent = {
			fullName: state.fullName,
			image: state.image,
			phone: state.phone,
			email: state.email,
			program: state.program,
			graduationYear: state.graduationYear,
			graduated: state.graduated,
		};
		props.handleAddStudent(newStudent);

		setState({
			fullName: "",
			image: "https://randomuser.me/api/portraits/lego/7.jpg",
			phone: "",
			email: "",
			program: "",
			graduationYear: 2023,
			graduated: false,
		});
	};

	return (
		<form onSubmit={handleSubmit}>
			<span>Add a Student</span>
			<div>
				<label>
					Full Name
					<input
						value={state.fullName}
						onChange={handleInput}
						name="fullName"
						type="text"
						placeholder="Full Name"
					/>
				</label>

				<label>
					Profile Image
					<input
						value={state.image}
						onChange={handleInput}
						name="image"
						type="url"
						placeholder="Profile Image"
					/>
				</label>

				<label>
					Phone
					<input
						value={state.phone}
						onChange={handleInput}
						name="phone"
						type="tel"
						placeholder="Phone"
					/>
				</label>

				<label>
					Email
					<input
						value={state.email}
						onChange={handleInput}
						name="email"
						type="email"
						placeholder="Email"
					/>
				</label>
			</div>

			<div>
				<label>
					Program
					<select value={state.program} onChange={handleInput} name="program">
						<option value="">-- None --</option>
						<option value="Web Dev">Web Dev</option>
						<option value="UXUI">UXUI</option>
						<option value="Data">Data</option>
					</select>
				</label>

				<label>
					Graduation Year
					<input
						value={state.graduationYear}
						onChange={handleInput}
						name="graduationYear"
						type="number"
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
						checked={state.graduated}
						onChange={handleInput}
						name="graduated"
						type="checkbox"
					/>
				</label>

				<button type="submit">Add Student</button>
			</div>
		</form>
	);
}

export default AddStudent;
