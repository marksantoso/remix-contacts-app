import { Form, NavLink, useLoaderData, useNavigation, useSubmit, redirect } from "@remix-run/react";
import { getContacts } from "../../data";
import { useEffect } from "react";
import type { LoaderData } from "../../root"; 
import ContactList from "../features/contacts/ContactList";
import SearchForm from "../features/contacts/SearchForm";

export default function SideBar() {
    const { contacts, q } = useLoaderData<LoaderData>();
    const submit = useSubmit();
    const navigation = useNavigation();

    useEffect(() => {
        const searchField = document.getElementById("q");
        if (searchField instanceof HTMLInputElement) {
            searchField.value = q || "";
        }
    }, [q]);

    const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q") || false;

    return (
        <div id="sidebar">
            <h1>Remix Contacts</h1>
            <div>
                <SearchForm q={q} />
                <Form method="post">
                    <button type="submit">New</button>
                </Form>
            </div>
            <ContactList contacts={contacts} />
        </div>
    );
}
