import { HeartFilledIcon } from "@radix-ui/react-icons";
import { HeartIcon } from "lucide-react";

type FavoriteProps = {
  isFavorite: boolean;
  size: "small" | "big";
};

export const Favorite = ({ isFavorite, size }: FavoriteProps) => {
  const variant = {
    small: "h-4 w-4",
    big: "h-6 w-6",
  };

  return isFavorite ? (
    <HeartFilledIcon className={variant[size]} />
  ) : (
    <HeartIcon className={variant[size]} />
  );
};
