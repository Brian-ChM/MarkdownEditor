import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"

import prisma from "@/app/lib/prisma"
import authConfig from "./auth.config"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  ...authConfig,
  session: { strategy: "database" },
})