import { format } from "@formkit/tempo";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import {
  ButtonDelete,
  ButtonEdit,
  ButtonFavorite,
  ButtonRead,
} from "./ButtonsCard";

type CardMdxProps = {
  id: string;
  title: string;
  slug: string;
  content: string;
  isFavorite: boolean;
  createdAt: Date;
};

export const CardMdx = ({
  id,
  title,
  slug,
  isFavorite,
  createdAt,
}: CardMdxProps) => {
  const date = format(createdAt, "full");

  return (
    <Card className="h-min w-72">
      <CardHeader>
        <CardTitle className="text-nowrap overflow-hidden pb-0.5">
          {title}
        </CardTitle>
        <CardDescription>{date}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-1">
        <ButtonRead slug={slug} />
        <ButtonFavorite id={id} isFavorite={isFavorite} variant="outline" />
        <ButtonEdit slug={slug} />
        <ButtonDelete id={id} />
      </CardFooter>
    </Card>
  );
};
