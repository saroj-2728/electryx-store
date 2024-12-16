import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub({
      allowDangerousEmailAccountLinking: true
    }),
    Facebook({
      allowDangerousEmailAccountLinking: true
    }),
    Google({
      allowDangerousEmailAccountLinking: true
    }),
    Resend({
      from: process.env.EMAIL_FROM
    }),
  ],
  session: {
    strategy: 'jwt',
  },
})