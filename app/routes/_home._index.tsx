import type { MetaFunction } from "@remix-run/node";
import { metaDescription, metaTitle } from "~/ContentData/WebsiteContent";
import Home from "~/page/home/Home";

export const meta: MetaFunction = () => {
  return [
    { title: metaTitle },
    { name: "description", content: metaDescription },
  ];
};

export default function Index() {
  return <Home />;
}
