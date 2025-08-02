import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi, userApi, type User, type AuthResponse } from "@/lib/api";
import { useSession, signIn, signOut } from "next-auth/react";

// Query Keys
export const queryKeys = {
  users: ["users"],
  auth: ["auth"],
} as const;

// Users Hooks
export const useUsers = () => {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: userApi.getUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

// Auth Hooks
export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: authApi.register,
    onSuccess: (data: AuthResponse) => {
      // Register sonrası otomatik login yapabilirsiniz
      signIn("credentials", {
        email: data.user.email,
        password: "", // Bu durumda backend'den token ile direkt login yapmanız gerekebilir
        redirect: false,
      });
      
      queryClient.invalidateQueries({ queryKey: queryKeys.users });
    },
    onError: (error) => {
      console.error("Register error:", error);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      console.log("Login attempt with:", credentials.email);
      
      // NextAuth'ın signIn fonksiyonunu kullan
      const result = await signIn("credentials", {
        email: credentials.email,
        password: credentials.password,
        redirect: false,
      });

      console.log("SignIn result:", result);

      if (result?.error) {
        console.error("SignIn error:", result.error);
        throw new Error(result.error === "CredentialsSignin" 
          ? "Email veya şifre hatalı. Lütfen bilgilerinizi kontrol edin." 
          : result.error
        );
      }

      if (!result?.ok) {
        throw new Error("Giriş işlemi başarısız oldu.");
      }

      return result;
    },
    onError: (error) => {
      console.error("Login mutation error:", error);
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await signOut({ redirect: false });
    },
    onSuccess: () => {
      // Tüm cache'i temizle
      queryClient.clear();
    },
  });
};

// Current user hook
export const useCurrentUser = () => {
  const { data: session, status } = useSession();
  
  return {
    user: session?.user || null,
    token: session?.accessToken,
    isLoading: status === "loading",
    isAuthenticated: !!session,
  };
};