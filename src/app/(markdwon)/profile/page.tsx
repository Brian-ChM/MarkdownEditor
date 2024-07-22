import { auth, signOut } from "@/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { redirect } from "next/navigation";

export default async function Profile() {
  const session = await auth()

  if (!session || !session.user) redirect("/auth/login");

  const { name, email, image } = session.user;

  return (
    <div className="flex flex-1 h-[calc(100dvh-52px)]">
      <div className="flex flex-col flex-1 justify-center items-center gap-3">
        <Avatar className="h-28 w-28" >
          <AvatarImage src={`${image}`} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h3 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{name}</h3>
        <small className="text-sm font-medium leading-none">{email}</small>

        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <Button variant="destructive" className="w-80" type="submit">Cerrar sesión</Button>
        </form>
      </div>
    </div>
  )
}