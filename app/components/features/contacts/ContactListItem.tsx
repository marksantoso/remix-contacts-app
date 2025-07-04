import { NavLink } from "@remix-run/react";
import type { ContactRecord } from "../../../data";

interface ContactListItemProps {
    contact: ContactRecord;
}

export default function ContactListItem({ contact }: ContactListItemProps) {
    return (
        <li key={contact.id}>
            <NavLink
                className={({ isActive, isPending }) =>
                    isActive
                        ? "active"
                        : isPending
                            ? "pending"
                            : ""
                }
                to={`contacts/${contact.id}`}
            >
                {contact.first || contact.last ? (
                    <>
                        {contact.first} {contact.last}
                    </>
                ) : (
                    <i>No Name</i>
                )}
                {contact.favorite ? (
                    <span>★</span>
                ) : null}
            </NavLink>
        </li>
    );
}

