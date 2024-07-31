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
import useMarkdownStore from "@/store";
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

type BtnFavorite = {
  id: string;
  variant: "default" | "outline" | "secondary" | "ghost" | "link";
  isFavorite: boolean;
  style?: "float";
};

export const ButtonFavorite = ({
  id,
  variant = "default",
  isFavorite,
  style,
}: BtnFavorite) => {
  const route = useRouter();

  const stylebtn = style === "float" ? "rounded-full w-14 h-14" : "";
  const stylebtnicon = style === "float" ? "big" : "small";

  const handleClickOnFavorite = async () => {
    await toggleFavoriteMarkdown(id, isFavorite);
    route.refresh();
  };
  return (
    <Button
      variant={variant}
      className={stylebtn}
      size="icon"
      onClick={handleClickOnFavorite}
    >
      <Favorite isFavorite={isFavorite} size={stylebtnicon} />
    </Button>
  );
};

export const ButtonRead = ({ slug }: { slug: string }) => {
  const route = useRouter();
  const handleClickonRead = () => {
    route.push(`/${slug}`);
  };

  return (
    <Button variant="outline" onClick={handleClickonRead} size="icon">
      <SquareArrowOutUpRight className="h-4 w-4" />
    </Button>
  );
};

type BtnEdit = {
  slug: string;
  style?: "float";
};

export const ButtonEdit = ({ style, slug }: BtnEdit) => {
  const route = useRouter();

  const stylebtn = style === "float" ? "rounded-full w-14 h-14" : "";
  const stylebtnicon = style === "float" ? "w-6 h-6" : "w-4 h-4";

  const handleEdit = () => {
    route.push(`/edit/${slug}`);
  };

  return (
    <Button className={stylebtn} size="icon" onClick={handleEdit}>
      <Pencil className={stylebtnicon} />
    </Button>
  );
};
