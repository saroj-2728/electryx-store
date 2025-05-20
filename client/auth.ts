import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Facebook from "next-auth/providers/facebook"
import Google from "next-auth/providers/google"
import Resend from "next-auth/providers/resend"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/prisma"
import type { UserRole } from "./actions/auth/auth"
import { cookies } from 'next/headers'

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

      if (account && account.provider !== 'resend') {
        const cookieStore = await cookies()
        const role = cookieStore.get('authRole')?.value || 'user'
        user.role = role as UserRole;
        cookieStore.delete('authRole')
        return true;
      }

      if (account?.provider === 'resend') {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
          select: { email: true, role: true }
        });

        if (existingUser) {
          user.role = existingUser.role as UserRole;
        }
        else {
          const pendingRole = await prisma.pendingRole.findFirst({
            where: { email: user.email! },
            orderBy: { createdAt: 'desc' }
          });

          user.role = (pendingRole?.role as UserRole) || 'user';

          if (pendingRole) {
            await prisma.pendingRole.delete({
              where: { id: pendingRole.id }
            });
          }
        }
      }
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
              userId: user.id as string,
              name: user.name ? user.name as string : ""
            }
          })
        }
        else {
          await prisma.sellerProfile.create({
            data: {
              userId: user.id as string,
              name: user.name ? user.name as string : "",
              storeName: ""
            }
          })
        }
      }
    }
  }
})