import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi, userApi } from "@/lib/api";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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
  const router = useRouter();

  return useMutation({
    mutationFn: async (credentials: { email: string; password: string; username: string }) => {
      // Register işlemini yap
      const registerResponse = await authApi.register(credentials);
      
      // Register başarılı ise, aynı bilgilerle otomatik login yap
      const loginResult = await signIn("credentials", {
        identifier: credentials.email, // email'i identifier olarak kullan
        password: credentials.password,
        redirect: false,
      });

      if (loginResult?.error) {
        console.error("Auto-login after register failed:", loginResult.error);
        // Login başarısız olsa bile register başarılı olmuş, sadece uyar
        throw new Error("Kayıt başarılı ancak otomatik giriş yapılamadı. Lütfen manuel giriş yapın.");
      }

      return { registerResponse, loginResult };
    },
    onSuccess: async (data) => {
      console.log("Register and auto-login success:", data);
      
      queryClient.invalidateQueries({ queryKey: queryKeys.users });
      
      // Başarılı register ve login sonrası ana sayfaya yönlendir
      router.push("/");
    },
    onError: (error) => {
      console.error("Register error:", error);
    },
  });
};

export const useLogin = () => {
  return useMutation({
    mutationFn: async (credentials: { identifier: string; password: string }) => {
      
      // NextAuth'ın signIn fonksiyonunu kullan
      const result = await signIn("credentials", {
        identifier: credentials.identifier,
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