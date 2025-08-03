import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL;

declare module "next-auth" {
  interface Session {
    accessToken?: string;
    user: {
      id: string;
      identifier: string;
      name: string;
      // Diğer user özellikleri buraya eklenebilir
    };
  }

  interface User {
    id: string;
    identifier: string;
    name: string;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string;
    user?: any;
  }
}

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        identifier: { label: "identifier", type: "identifier" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.identifier || !credentials?.password) {
          console.log("Missing credentials");
          return null;
        }

        try {
          console.log("Attempting login for:", credentials.identifier);
          console.log("Backend URL:", BACKEND_URL);

          // Backend'e login isteği gönder - rememberMe field'ını da ekle
          const response = await axios.post(
            `${BACKEND_URL}/auth/login`,
            {
              identifier: credentials.identifier,
              password: credentials.password,
            },
            {
              timeout: 10000, // 10 saniye timeout
            }
          );

          console.log("Backend response:", response.data);

          const { token, user } = response.data;

          if (token && user) {
            const userObj = {
              id: user.id?.toString() || user._id?.toString(),
              identifier: user.identifier,
              name: user.name || user.email,
              accessToken: token,
            };

            console.log("Returning user object:", userObj);
            return userObj;
          }

          console.log("Invalid response format from backend");
          return null;
        } catch (error) {
          console.error("Auth error details:", error);

          if (axios.isAxiosError(error)) {
            console.error("Axios error:", {
              status: error.response?.status,
              data: error.response?.data,
              message: error.message,
            });
          }

          // Hata durumunda null döndür, böylece NextAuth CredentialsSignin hatası fırlatır
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        console.log("JWT callback - user:", user);
        token.accessToken = user.accessToken;
        token.user = {
          id: user.id,
          identifier: user.identifier,
          name: user.name,
        };
      }
      return token;
    },
    async session({ session, token }) {
      console.log("Session callback - token:", token);
      session.accessToken = token.accessToken as string;
      session.user = token.user as any;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: 10 * 24 * 60 * 60, // 10 gün (saniye cinsinden)
    updateAge: 24 * 60 * 60, // 24 saatte bir session'ı güncelle
  },
  jwt: {
    maxAge: 10 * 24 * 60 * 60, // JWT token'ının da 10 gün geçerli olması
  },
  debug: process.env.NODE_ENV === "development", // Development'ta debug mode
});

export { handler as GET, handler as POST };