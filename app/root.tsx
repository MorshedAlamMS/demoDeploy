import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import "./tailwind.css";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { Loading } from "~/components/shared/loading/Loading";
import { ErrorBoundaryComponent } from "./components/error/ErrorBoundaryComponent";
import { faviconName } from "./ContentData/WebsiteContent";

export const links: LinksFunction = () => [
  {
    rel: "icon",
    href: `/${faviconName}`,
    type: "image/png",
  },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <Toaster position="top-center" reverseOrder={true} />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // * Delay rendering to avoid hydration issues
    const timeout = setTimeout(() => setIsClient(true), 100);

    if (typeof window !== "undefined") {
      window.scrollTo(0, 0);
    }

    return () => clearTimeout(timeout); // * Cleanup on unmount
  }, []);

  return isClient ? (
    <Outlet />
  ) : (
    <div className="h-screen flex items-center justify-center">
      <Loading />
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return <ErrorBoundaryComponent error={error} />;
}
