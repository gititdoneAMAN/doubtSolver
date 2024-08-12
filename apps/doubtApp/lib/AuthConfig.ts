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
                empId: existingUser.employeeId,
              };
            }
          }
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "NEXTAUTH_SECRET",
  callbacks: {
    async jwt({ token, user }: any) {
      // When the user is authenticated, include role and department in the token
      if (user) {
        token.role = user.role;
        token.department = user.department;
        token.identity = user.usn || user.empId;
      }
      return token;
    },
    session: ({ session, token, user }: any) => {
      if (session.user) {
        session.user.id = token.sub;
        session.user.role = token.role;
        session.user.department = token.department;
        session.user.identity = token.identity;
        // console.log("Department", session.user.department);
      }
      return session;
    },
  },
  pages: {
    signIn: "/signIn",
  },
};
