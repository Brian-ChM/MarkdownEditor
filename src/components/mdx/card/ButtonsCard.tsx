"use client";

import { deleteMarkdown, toggleFavoriteMarkdown } from "@/app/lib/actions";
import { Favorite } from "@/components/Favorite";
import {
  AlertDialogFooter,
  AlertDialogHeader,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@radix-ui/react-alert-dialog";
import { HeartFilledIcon, ReaderIcon } from "@radix-ui/react-icons";
import { HeartIcon, TrashIcon } from "lucide-react";
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
    <Button variant="secondary" onClick={handleClickOnFavorite} size="icon">
      <Favorite isFavorite={isFavorite} />
    </Button>
  );
};

export const ButtonRead = () => {
  return (
    <Button>
      <ReaderIcon className="mr-2 h-4 w-4" />
      Leer más
    </Button>
  );
};
