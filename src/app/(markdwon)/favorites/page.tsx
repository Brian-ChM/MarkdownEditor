import { getMarkdowns } from "@/app/lib/actions";
import { auth } from "@/auth";
import { CardMdx } from "@/components/mdx/card/CardMdx";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { redirect } from "next/navigation";

export default async function Favorites() {
  const session = await auth();
  if (!session || !session.user) redirect("/auth/login");

  const { data } = await getMarkdowns();

  const favoriteMarkdowns = data?.filter((markdown) => markdown.isFavorite);

  return (
    <div className="flex flex-1 h-[calc(100dvh-52px)]">
      <ScrollArea className="grow p-2">
        <div className="flex flex-wrap justify-center content-start gap-3">
          {favoriteMarkdowns?.map(
            ({ id, title, content, isFavorite, createdAt }, index) => {
              return (
                <CardMdx
                  key={index}
                  id={id}
                  title={title}
                  content={content}
                  isFavorite={isFavorite}
                  createdAt={createdAt}
                />
              );
            }
          )}
        </div>
        <ScrollBar />
      </ScrollArea>
    </div>
  );
}
