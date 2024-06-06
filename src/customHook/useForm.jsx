import { useState } from "react";

export default function useForm(initialValue) {
    const [object, setObject] = useState(initialValue);

    const handleFormData = (event) => {
        const value = event.currentTarget.name === "graduated" ? event.currentTarget.checked : event.currentTarget.value;
        setObject({ ...object, [event.currentTarget.name]: value });
    };
    return [object, handleFormData];
}
