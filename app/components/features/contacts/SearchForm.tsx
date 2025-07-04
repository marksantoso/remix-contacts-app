import { Form, useSubmit, useNavigation } from "@remix-run/react";
import SearchSpinner from "../../ui/SearchSpinner";

interface SearchFormProps {
    q?: string | null;
}

export default function SearchForm({ q }: SearchFormProps) {
    const submit = useSubmit();
    const navigation = useNavigation();
    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q") || false;

    return (
        <Form
            id="search-form"
            onChange={(event) => {
                const isFirstSearch = q === null;
                submit(event.currentTarget, {
                    replace: !isFirstSearch,
                });
            }}
            role="search"
        >
            <input
                id="q"
                defaultValue={q ?? ""}
                aria-label="Search contacts"
                className={searching ? "loading" : ""}
                placeholder="Search"
                type="search"
                name="q"
            />
            <SearchSpinner searching={searching} />
        </Form>
    );
}
