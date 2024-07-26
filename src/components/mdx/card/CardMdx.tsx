import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { ButtonDelete, ButtonFavorite, ButtonRead } from "./ButtonsCard";

type CardMdxProps = {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
  createdAt: Date;
};

export const CardMdx = ({ id, title, isFavorite, createdAt }: CardMdxProps) => {
  const day = createdAt.getDate().toString().padStart(2, "0");
  const month = createdAt.getMonth().toString().padStart(2, "0");
  const year = createdAt.getFullYear();

  return (
    <Card className="h-min w-min">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{`${day}-${month}-${year}`}</CardDescription>
      </CardHeader>
      <CardFooter className="gap-1">
        <ButtonRead />
        <ButtonFavorite id={id} isFavorite={isFavorite} />
        <ButtonDelete id={id} />
      </CardFooter>
    </Card>
  );
};
