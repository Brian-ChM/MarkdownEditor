import Link from "next/link";
import { IoLogoMarkdown } from "react-icons/io5";
import { Button } from "../ui/button";
import { ActiveLink } from "../ui/ActiveLink";
import { ModeToggle } from "../mode-toggle";

// rafc
export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-primary-foreground">
      <Button variant="link" asChild>
        <Link className="flex gap-1" href="/">
          <IoLogoMarkdown size={30} />
          <h1 className="text-xl font-bold">Editor</h1>
        </Link>
      </Button>

      <div className="flex items-center">
        <ActiveLink href={"/"} text={"Editor"} />
        <ActiveLink href={"/saves"} text={"Guardados"} />
        <ActiveLink href={"/favorites"} text={"Favoritos"} />
        <ActiveLink href={"/profile"} text={"Perfil"} />
        <ModeToggle />
      </div>
    </nav>
  )
}