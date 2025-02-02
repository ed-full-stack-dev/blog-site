import { useState } from "react";

interface FormErrors {
    [key: string]: string;
}

export default function useCTGform<T extends { name: string; email: string; githubUser: string, file: File | null }>(initialState: T) {
    const [values, setValues] = useState<T>(initialState);
    const [errors, setErros] = useState<FormErrors>({});
    const [isSubmitSuccessful,setIsSubmitSuccessful] = useState<boolean>(false);
    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setValues({
            ...values, [name]: value
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newErrors: FormErrors = {}
        if (!values.name) {
            newErrors.name = 'Please enter your full name.'
        }
        if (!values.email) {
            newErrors.email = 'Please enter your email address.'
        }
        if (!values.githubUser) {
            newErrors.githubUser = 'Please enter your Github username.'
        }
        if(!values.file) {
            debugger;
            newErrors.file = 'Please upload a file.'
        }
        setErros(newErrors);
        if (Object.keys(newErrors).length === 0) {
            setIsSubmitSuccessful(true)
        }
    }

    return { values, errors, handleChange, handleSubmit, isSubmitSuccessful }
}