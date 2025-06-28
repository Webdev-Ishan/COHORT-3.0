import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import { NextAuthOptions } from "next-auth";
export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID || "jcl",
      clientSecret: process.env.GITHUB_SECRET || "fgbqhbt",
    }),
    
  ],
  
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
