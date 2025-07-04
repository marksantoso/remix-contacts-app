import type { ContactRecord } from "../../../data";
import ContactListItem from "./ContactListItem";

interface ContactListProps {
    contacts: ContactRecord[];
}

export default function ContactList({ contacts }: ContactListProps) {
    return (
        <nav>
            {contacts.length ? (
                <ul>
                    {contacts.map((contact) => (
                        <ContactListItem key={contact.id} contact={contact} />
                    ))}
                </ul>
            ) : (
                <p>
                    <i>No contacts</i>
                </p>
            )}
        </nav>
    );
}
