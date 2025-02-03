import { useState } from "react";

interface FormErrors {
    [key: string]: string;
}

export default function useCTGform<T extends { name: string; email: string; githubUser: string; file: File | null }>(
    initialState: T
) {
    const [values, setValues] = useState<T>(initialState);
    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitSuccessful, setIsSubmitSuccessful] = useState<boolean>(false);

    // Function to convert the file to a Base64 string and save it to localStorage
    const saveFileToLocalStorage = (file: File | null) => {
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
            localStorage.setItem("uploadedImage", reader.result as string); // Save Base64 string
        };
        reader.readAsDataURL(file);
    };

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value, files } = e.target;

        if (name === "file" && files && files[0]) {
            const uploadedFile = files[0];
            saveFileToLocalStorage(uploadedFile); // Save file to localStorage
            setValues({
                ...values,
                [name]: uploadedFile,
            });
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newErrors: FormErrors = {};
        if (!values.name) {
            newErrors.name = "Please enter your full name.";
        }
        if (!values.email) {
            newErrors.email = "Please enter your email address.";
        }
        if (!values.githubUser) {
            newErrors.githubUser = "Please enter your Github username.";
        }
        if (!values.file) {
            newErrors.file = "Please upload a file.";
        }
        setErrors(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitSuccessful(true);
        }
    }

    return { values, errors, handleChange, handleSubmit, isSubmitSuccessful };
}
