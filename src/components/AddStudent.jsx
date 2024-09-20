function AddStudent(props) {

    const {handleAddUser, handleChangeValues, newStudent} = props

    return (
        <form onSubmit={handleAddUser}>
            <span>Add a Student</span>
            <div>
            <label>
                Full Name
                <input onChange={handleChangeValues} name="fullName" type="text" placeholder="Full Name" value={newStudent.fullName}/>
            </label>

            <label>
                Profile Image
                <input onChange={handleChangeValues} name="image" type="url" placeholder="Profile Image" value={newStudent.image}/>
            </label>

            <label>
                Phone
                <input onChange={handleChangeValues} name="phone" type="tel" placeholder="Phone" value={newStudent.phone}/>
            </label>

            <label>
                Email
                <input onChange={handleChangeValues} name="email" type="email" placeholder="Email" value={newStudent.email}/>
            </label>
            </div>

            <div>
            <label>
                Program
                <select onChange={handleChangeValues} name="program" value={newStudent.program}>
                <option value="">-- None --</option>
                <option value="Web Dev">Web Dev</option>
                <option value="UXUI">UXUI</option>
                <option value="Data">Data</option>
                </select>
            </label>

            <label>
                Graduation Year
                <input onChange={handleChangeValues} value={newStudent.graduationYear}
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
                <input onChange={handleChangeValues} name="graduated" type="checkbox" checked={newStudent.graduated}/>
            </label>

            <button type="submit">Add Student</button>
            </div>

        </form>

    )
    }

    export default AddStudent