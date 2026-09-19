import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {prisma} from "@repo/db"; 
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql", // or "mysql", "postgresql", ...etc
    }),
    
    trustedOrigins: [
        process.env.PUBLIC_TRUSTED_FRONTED_BETTER_AUTH_URL!
    ],
    emailAndPassword : { 
        enabled : true
    },

    plugins: [nextCookies()]
});