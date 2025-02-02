import ErrorMessage from "./ErrorMessage";
import Show from "./Show";

interface FormItemInputProps {
    label: string;
    name: string;
    placeholder: string;
    errorMessage: string;
    value:string | undefined;
    onChange?: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

function FormItemInput({ label, name, placeholder, errorMessage,value, onChange }: FormItemInputProps) {
    const showError = Boolean(errorMessage);
    return (
        <div className="form__item">
            <label htmlFor={name} className='form__label'>{label}</label>
            <input value={value} onChange={onChange} type="text" name={name} className="form__input" placeholder={placeholder} />
            <Show when={showError} fallback={null}>
                <ErrorMessage message={errorMessage} />
            </Show>
        </div>
    )
}

export default FormItemInput;