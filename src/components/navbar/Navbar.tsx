import Link from "next/link";
import { IoLogoMarkdown } from "react-icons/io5";
import { Button } from "../ui/button";
import { NavMenu } from "./NavMenu";

export const Navbar = () => {
  return (
    <nav className="relative flex items-center justify-between px-4 py-2 bg-primary-foreground z-50">
      <div className="absolute inset-0 w-full h-full bg-primary-foreground z-50" />

      <Button className="z-50" variant="link" asChild>
        <Link className="flex gap-1" href="/">
          <IoLogoMarkdown size={30} />
          <h1 className="text-xl font-bold">Editor</h1>
        </Link>
      </Button>

      <NavMenu />
    </nav>
  );
};
