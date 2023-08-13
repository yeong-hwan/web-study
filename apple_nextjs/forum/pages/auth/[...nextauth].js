import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: '16d5e066e24de33b54c8',
      clientSecret: '32c79d08702d996bbf525f51475e0e5f7aa5a6bc',
    }),
  ],
  secret : 'jyh0914@'
};
export default NextAuth(authOptions); 