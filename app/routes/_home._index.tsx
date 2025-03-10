import type { MetaFunction } from "@remix-run/node";
import { metaDescription } from "~/constants";
import Home from "~/page/home/Home";

export const meta: MetaFunction = () => {
  return [
    { title: 'Thumbnail Boss – Master the Art of High-Performing Thumbnails' },
    { name: 'description', content: metaDescription }
  ]
}

export default function Index() {
  return (
  <div className="">
    <Home/>
  </div>);
}
