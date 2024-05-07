export default function NewStudent() {
    return (
      <div>
        <h1>Add Student</h1>
        <form>
          <div className="input-wrapper">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={handleNameChange}
            />
          </div>
          <div className="input-wrapper">
            <label>Image URL:</label>
            <input
              type="text"
              name="imgURL"
              value={imgURL}
              onChange={handleImgChange}
            />
          </div>
          <div className="input-wrapper">
            <label>Age:</label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={handleAgeChange}
            />
          </div>
          <div className="input-wrapper">
            <label>Bootcamp:</label>
            <div className="select-wrapper">
              <select name="bootcamp" value={bootcamp} onChange={handleBootcampChange}>
                <option value="">Select a bootcamp</option>
                <option value="Web Development">Web Development</option>
                <option value="UX/UI Design">UX/UI Design</option>
                <option value="Data Analytics">Data Analytics</option>
              </select>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    );
}