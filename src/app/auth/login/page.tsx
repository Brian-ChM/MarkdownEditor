import { SignInButton } from '@/components/SignInButton';
import { GrGithub, GrGoogle } from "react-icons/gr";
import { IoLogoMarkdown } from 'react-icons/io5';

export default function Page() {
  return (
    <div className="flex items-center justify-center w-full h-dvh">
      <div className="min-w-max max-w-md space-y-4 bg-slate-900 rounded-md px-8 py-12">
        <div className="flex gap-2 items-center justify-center px-12">
          <IoLogoMarkdown size={70} />
          <h1 className="text-6xl font-bold">
            <span className='sr-only'>Markdown</span>
            Editor
          </h1>
        </div>
        <p className="text-[0.8rem] text-muted-foreground text-center">
          Inicia sesión con tu método preferido.
        </p>

        <div className="flex flex-col gap-2">
          <SignInButton provider="github">
            <GrGithub className="mr-2 w-4 h-4" />
            Iniciar sesión con Github
          </SignInButton>
          <SignInButton provider="google">
            <GrGoogle className="mr-2 w-4 h-4" />
            Iniciar sesión con Google
          </SignInButton>
        </div>

      </div>

    </div>
  )
}