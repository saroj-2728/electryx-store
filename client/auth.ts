import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import type { UserRole } from "./actions/auth/auth"

export const {
  handlers,
  signIn,
  signOut,
  auth
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GitHub,
    Facebook,
    Google,
    Resend({
      from: process.env.EMAIL_FROM
    }),
  ],
  session: {
    strategy: 'jwt',
  },
  pages: {
    error: "/authError"
  },

  callbacks: {
    async signIn({ user, account, profile }) {
      const role = globalThis.authRole || 'user'

      if (profile && account) {
        user.role = role;
      }
      delete globalThis.authRole;
      return true
    },

    async jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }

      return token
    },

    async session({ session, token }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

      return session
    }
  },

  events: {
    async signIn({ user, isNewUser }) {
      if (isNewUser) {
        if (user.role === 'user') {
          await prisma.userProfile.create({
            data: {
              userId: user.id as string
            }
          })
        }
        else {
          await prisma.sellerProfile.create({
            data: {
              userId: user.id as string,
              storeName: ""
            }
          })
        }
      }
    }
  }
})