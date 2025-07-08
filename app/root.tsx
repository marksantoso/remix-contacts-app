import type { LinksFunction, LoaderFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from "@remix-run/react";
import appStylesHref from "./app.css?url";
import { createEmptyContact, getContacts } from "./data";
import SideBar from "./components/layout/SideBar";
import { ChakraProvider } from "./components/ui/ChakraProvider"
import { createEmotionCache } from "~/emotion/emotion-cache";
import { useInjectStyles } from "~/emotion/emotion-client";

const emotionCache = createEmotionCache();

// The LoaderData type is a TypeScript interface that defines the shape of the data that the loader function returns
export type LoaderData = {
  contacts: Awaited<ReturnType<typeof getContacts>>;
  q: string | null;
};

// Returns an array of link objects that Remix will automatically inject into your HTML document's <head>
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStylesHref },
];

// The loader function is a server-side function that runs when a user visits a route.
// It fetches data from the server and returns it to the client.
export const loader = async ({
  request,
}: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const contacts = await getContacts(q);
  return { contacts, q };
};

// The action function is a server-side function that runs when a user submits a form.
// It handles the form submission and returns a response to the client.
export const action = async () => {
  const contact = await createEmptyContact();
  return redirect(`/contacts/${contact.id}/edit`);
};

// The App component is the root component of the application.
// It renders the layout and the child routes.
export default function App() {
  const navigation = useNavigation();
  const searching = navigation.location && new URLSearchParams(navigation.location.search).has("q");

  useInjectStyles(emotionCache)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
          <ChakraProvider>
            <SideBar />
            <div
              className={
                navigation.state === "loading" && !searching
                  ? "loading"
                  : ""
              }
              id="detail">

              <Outlet /> {/* This is where the child routes will be rendered */}

            </div>
            <ScrollRestoration />
            <Scripts />
          </ChakraProvider>
      </body>
    </html>
  );
}
