import { HeartFilledIcon, HeartIcon, ReaderIcon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "../../ui/button"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "../../ui/card"

export const CardMdx = ({ isFavorite }: { isFavorite?: boolean }) => {

  const Favorite = () => isFavorite ? <HeartFilledIcon className="h-4 w-4" /> : <HeartIcon className="h-4 w-4" />

  return (
    <Card className="h-min w-min">
      <CardHeader>
        <CardTitle>Titulo del documento</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardFooter className="gap-1">
        <Button>
          <ReaderIcon className="mr-2 h-4 w-4" />
          Leer más
        </Button>

        <Button variant="secondary" size="icon">
          <Favorite />
        </Button>

        <Button variant="destructive" size="icon">
          <TrashIcon className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}