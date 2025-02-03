interface ErrorIconProps {
    errorStroke?: string;
    errorFill?: string;
}

function ErrorIcon({ errorFill = 'error-fill', errorStroke = 'error-stroke' }: ErrorIconProps) {
    return (
        <svg className="error-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
            <path className={errorStroke} strokeLinecap="round" strokeLinejoin="round" d="M2 8a6 6 0 1 0 12 0A6 6 0 0 0 2 8Z"></path>
            <path className={errorFill} d="M8.004 10.462V7.596ZM8 5.57v-.042Z"></path>
            <path className={errorStroke} strokeLinecap="round" strokeLinejoin="round" d="M8.004 10.462V7.596M8 5.569v-.042"></path>
        </svg>
    );
}

export default ErrorIcon;