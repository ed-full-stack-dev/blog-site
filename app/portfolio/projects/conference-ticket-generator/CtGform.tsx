import FormItemInput from "@/components/FormItemInput";
import { FileUpload } from "./FileUpload";
import { CTGformState } from "@/types/projects";

interface CtGformProps {
    values: CTGformState;
    errors: { [key: string]: string };
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export default function CtGform({ values, errors, handleChange, handleSubmit }: CtGformProps) {
    return (
        <form className='form' onSubmit={handleSubmit}>
            <FileUpload handleChange={handleChange} />
            <FormItemInput
                value={values.name}
                onChange={handleChange}
                label='Full Name'
                placeholder='Full Name'
                name='name'
                errorMessage={errors.name}
            />
            <FormItemInput
                value={values.email}
                onChange={handleChange}
                label='Email Address'
                placeholder='Email Address'
                name='email'
                errorMessage={errors.email}
            />
            <FormItemInput
                value={values.githubUser}
                onChange={handleChange}
                label='Github Username'
                placeholder='Github Username'
                name='githubUser'
                errorMessage={errors.githubUser}
            />
            <input type="submit" value='Generate My Ticket' />
        </form>
    )
}