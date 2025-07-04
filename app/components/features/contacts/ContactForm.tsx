import { useNavigate } from "@remix-run/react";
import type { ContactRecord } from "~/data";
import { Form } from "@remix-run/react";
import { Button } from "~/components/ui/Button";
import { Input } from "~/components/ui/Input";
import { TextArea } from "~/components/ui/TextArea";

interface ContactFormProps {
    contact?: ContactRecord;
}

export function ContactForm({ contact }: ContactFormProps) {
    const navigate = useNavigate();

    return (

        <Form id="contact-form" method="post">
            <Input
                label="First name"
                aria-label="First name"
                defaultValue={contact?.first}
                name="first"
                placeholder="First"
                type="text"
            />
            <Input
                label="Last name"
                aria-label="Last name"
                defaultValue={contact?.last}
                name="last"
                placeholder="Last"
                type="text"
            />


            <Input
                label="Twitter"
                defaultValue={contact?.twitter}
                name="twitter"
                placeholder="@jack"
                type="text"
            />

            <Input
                label="Avatar URL"
                aria-label="Avatar URL"
                defaultValue={contact?.avatar}
                name="avatar"
                placeholder="https://example.com/avatar.jpg"
                type="text"
            />

            <TextArea
                label="Notes"
                defaultValue={contact?.notes}
                name="notes"
                rows={6}
            />
            <p>
                <Button type="submit">Save</Button>
                <Button type="button" onClick={() => navigate(-1)}>
                    Cancel
                </Button>
            </p>
        </Form>
    );
}
