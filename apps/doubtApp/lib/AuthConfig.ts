import CredentialsProvider from "next-auth/providers/credentials";
import { pages } from "next/dist/build/templates/app-page";
import prisma from "@repo/db/client";
import { signInSchema } from "@repo/schemas/signInSchema";

export const authConfig = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials: any) {
        credentials;
        const parsedCredentials = signInSchema.safeParse(credentials);
        parsedCredentials;
        if (!parsedCredentials.success) {
          return null;
        } else {
          if (parsedCredentials.data.role === "student") {
            const existingUser = await prisma.student.findFirst({
              where: {
                email: parsedCredentials.data.email,
              },
            });

            if (!existingUser) {
              return null;
            } else {
              return {
                id: existingUser.id,
                email: existingUser.email,
                name: existingUser.name,
                usn: existingUser.usn,
                department: existingUser.depatment,
                subjects: existingUser.subjects,
                role: "Student",
              };
            }
          } else {
            const existingUser = await prisma.teachers.findFirst({
              where: {
                email: parsedCredentials.data.email,
              },
            });

            if (!existingUser) {
              return null;
            } else {
              return {
                id: existingUser.id,
                email: existingUser.email,
                name: existingUser.name,
                role: "Teacher",
                department: existingUser.depatment,
              };
            }
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "NEXTAUTH_SECRET",
  callbacks: {
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
};
