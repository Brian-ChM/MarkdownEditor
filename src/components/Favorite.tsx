import { HeartFilledIcon } from "@radix-ui/react-icons";
import { HeartIcon } from "lucide-react";

export const Favorite = ({ isFavorite }: { isFavorite: boolean }) =>
  isFavorite ? (
    <HeartFilledIcon className="h-4 w-4" />
  ) : (
    <HeartIcon className="h-4 w-4" />
  );
