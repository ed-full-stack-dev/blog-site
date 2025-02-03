import ErrorIcon from "./ErrorIcon";

interface ErrorMessageProps {
    message?: string;
}
function ErrorMessage({ message }: ErrorMessageProps) {

    return (
        <div className="form__error">
            <ErrorIcon />
            <span>{message}</span>
        </div>
    )
}

export default ErrorMessage;