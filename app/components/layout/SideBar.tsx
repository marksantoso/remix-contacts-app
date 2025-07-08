import { Form, useLoaderData } from "@remix-run/react";
import { useEffect } from "react";
import type { LoaderData } from "../../root"; 
import { Button } from "../ui/Button";
import ContactList from "../features/contacts/ContactList";
import SearchForm from "../features/contacts/SearchForm";

export default function SideBar() {
    const { contacts, q } = useLoaderData<LoaderData>();

    useEffect(() => {
        const searchField = document.getElementById("q");
        if (searchField instanceof HTMLInputElement) {
            searchField.value = q || "";
        }
    }, [q]);

    return (
        <div id="sidebar">
            <h1>Remix Contacts</h1>
            <div>
                <SearchForm q={q} />
                <Form method="post">
                    <Button type="submit" variant="primary" size="sm">New</Button>
                </Form>
            </div>
            <ContactList contacts={contacts} />
        </div>
    );
}