interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label: string;
    error?: string;
}

export function TextArea({ label, error, ...props }: TextAreaProps) {
    return (
        <label>
            <span>{label}</span>
            <textarea {...props} />
            {error && <span className="error">{error}</span>}
        </label>
    );
}