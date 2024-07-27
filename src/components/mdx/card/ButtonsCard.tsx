"use client";

import { deleteMarkdown, toggleFavoriteMarkdown } from "@/app/lib/actions";
import { Favorite } from "@/components/Favorite";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { TrashIcon, SquareArrowOutUpRight, Pencil } from "lucide-react";
import { useRouter } from "next/navigation";

export const ButtonDelete = ({ id }: { id: string }) => {
  const route = useRouter();

  const handleClickOnDelete = async () => {
    await deleteMarkdown(id);
    route.refresh();
  };
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Estas seguro de eliminar?</AlertDialogTitle>
          <AlertDialogDescription>
            Una vez eliminado no podra recupera el archivo
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleClickOnDelete}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export const ButtonFavorite = ({
  id,
  isFavorite,
}: {
  id: string;
  isFavorite: boolean;
}) => {
  const route = useRouter();

  const handleClickOnFavorite = async () => {
    await toggleFavoriteMarkdown(id, isFavorite);
    route.refresh();
  };
  return (
    <Button variant="outline" onClick={handleClickOnFavorite} size="icon">
      <Favorite isFavorite={isFavorite} />
    </Button>
  );
};

export const ButtonRead = ({ slug }: { slug: string }) => {
  const route = useRouter();
  const handleClickonRead = () => {
    console.log(slug);

    route.push(`/${slug}`);
  };

  return (
    <Button variant="outline" onClick={handleClickonRead} size="icon">
      <SquareArrowOutUpRight className="h-4 w-4" />
    </Button>
  );
};

export const ButtonEdit = () => {
  const route = useRouter();

  return (
    <Button variant="default" size="icon">
      <Pencil className="h-4 w-4" />
    </Button>
  );
};
