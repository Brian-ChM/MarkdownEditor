"use client"
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

export const ActiveLink = ({ href, text }: { href: string, text: string }) => {

  const path = usePathname()
  const style = href == path ? "underline" : ""

  return (
    <Button variant="link" className={`${style}`} asChild>
      <Link href={href}>{text}</Link>
    </Button>
  )
}