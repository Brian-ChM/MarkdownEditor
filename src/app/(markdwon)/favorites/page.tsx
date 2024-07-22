import { auth } from "@/auth";
import { CardMdx } from "@/components/mdx/card/CardMdx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";

export default async function Favorites() {
  const session = await auth()
  if (!session || !session.user) redirect("/auth/login");

  return (
    <div className="flex flex-1 h-[calc(100dvh-52px)]">
      <ScrollArea className="grow p-2">
        <div className="flex flex-wrap justify-center content-start gap-3">
          <CardMdx isFavorite />
          <CardMdx isFavorite />
          <CardMdx isFavorite />
          <CardMdx isFavorite />
          <CardMdx isFavorite />
          <CardMdx isFavorite />
        </div>
        <ScrollBar />
      </ScrollArea>
    </div>
  )
}