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
  const day = createdAt.getDate().toString().padStart(2, "0");
  const month = createdAt.getMonth().toString().padStart(2, "0");
  const year = createdAt.getFullYear();

  return (
    <Card className="h-min w-72">
      <CardHeader>
        <CardTitle className="overflow-hidden text-nowrap">{title}</CardTitle>
        <CardDescription>{`${day}-${month}-${year}`}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-1">
        <ButtonRead slug={slug} />
        <ButtonFavorite id={id} isFavorite={isFavorite} />
        <ButtonEdit />
        <ButtonDelete id={id} />
      </CardFooter>
    </Card>
  );
};
