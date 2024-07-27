"use client";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../mode-toggle";
import { ActiveLink } from "../ui/ActiveLink";
import { Button } from "../ui/button";

export const NavMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="relative flex items-center bg-inherit z-50">
        <Button
          className="md:hidden"
          onClick={toggleMenu}
          variant="ghost"
          size="icon"
        >
          <Menu className="w-6 h-6" />
        </Button>

        <div
          className={`absolute -right-2 top-12 md:relative md:flex-row md:block md:inset-0  bg-inherit rounded-md flex flex-col items-start ${
            !showMenu && "hidden"
          }`}
        >
          <ActiveLink onClick={toggleMenu} href={"/"} text={"Editor"} />
          <ActiveLink onClick={toggleMenu} href={"/saves"} text={"Guardados"} />
          <ActiveLink
            onClick={toggleMenu}
            href={"/favorites"}
            text={"Favoritos"}
          />
          <ActiveLink onClick={toggleMenu} href={"/profile"} text={"Perfil"} />
        </div>

        <ModeToggle />
      </div>

      <div
        onClick={toggleMenu}
        className={`absolute w-vw h-dvh inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden ${
          !showMenu && "hidden"
        }`}
      />
    </>
  );
};
