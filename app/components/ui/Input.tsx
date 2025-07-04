interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    error?: string;
}

export function Input({ label, error, ...props }: InputProps) {
    return (
        <label>
            <span>{label}</span>
            <input {...props} />
            {error && <span className="error">{error}</span>}
        </label>
    );
}