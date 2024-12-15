import type { NextAuthConfig } from "next-auth";

import Google from "next-auth/providers/google";

export default {
    providers: [
        Google({
            id: "google",
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        }),
    ],
} satisfies NextAuthConfig;