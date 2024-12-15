import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/lib/auth.config";

import { getAccountByUserId, getUserByID } from "./lib/data";

export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: "/auth/login",
    },
    events: {
        // async linkAccount({ user }) {
        //     await db.user.update({
        //         where: { id: user.id },
        //     });
        // },
    },
    callbacks: {
        async signIn({ user, account }) {
            return true;
        },

        async session({ token, session }) {
            if (token.sub && session.user) {
                session.user.id = token.sub;
            }

            if (session.user) {
                session.user.name = token.name;
                session.user.username = token.username;
                session.user.email = token.email;
                session.user.image = token.image;
            }
            return session;
        },

        async jwt({ token }) {
            if (!token.sub) return token;
            const existingUser = await getUserByID(token.sub);
            if (!existingUser) return token;
            const existingAccount = await getAccountByUserId(existingUser.id);
            token.isOAuth = !!existingAccount;
            token.name = existingUser.name;
            token.email = existingUser.email;
            token.username =
                existingUser.username ?? existingUser.email.split("@")[0];
            token.image = existingUser.image;
            return token;
        },
    },
    adapter: PrismaAdapter(db),
    session: { strategy: "jwt" },
    ...authConfig,
});