import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function AddStudent({createStudent}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !age || !bootcamp) {
            alert("Please fill in all fields");
            return;
        }

        const id = uuidv4();
        const img = imgURL || defaultImg;
        createStudent({ id, name, img, age, bootcamp });

        setName("");
        setAge(0);
        setBootcamp("");

        navigate("/students");
    };

    return (
        <div>
            <h1>Add Student</h1>
        </div>
    );
}