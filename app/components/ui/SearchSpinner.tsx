interface SearchSpinnerProps {
    searching: boolean;
}

export default function SearchSpinner({ searching }: SearchSpinnerProps) {
    return (
        <div
            aria-hidden
            hidden={!searching}
            id="search-spinner"
        />
    );
}
