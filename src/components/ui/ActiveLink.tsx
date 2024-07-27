"use client";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
  href,
  text,
  onClick,
  ...props
}: {
  href: string;
  text: string;
  onClick?: () => void;
  props?: any;
}) => {
  const path = usePathname();
  const style = href == path ? "underline" : "";

  return (
    <Button
      {...props}
      variant="link"
      className={`${style}`}
      onClick={onClick}
      asChild
    >
      <Link href={href}>{text}</Link>
    </Button>
  );
};
