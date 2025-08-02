import axios from "axios";
import { getSession } from "next-auth/react";

// API Base URL - Next.js API routes kullanıyoruz (CORS sorununu çözer)
const API_BASE_URL = "/api";

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Token expired or invalid, could redirect to login
      console.warn("Authentication token expired or invalid");
    }
    return Promise.reject(error);
  }
);

// Types
export interface User {
  id: string;
  email: string;
  username: string;
  profile_image: string | null;
  is_premium: boolean;
  current_level: number;
  xp: number;
  coins: number;
  streak: number;
  isActive: boolean;
  role: string;
  last_login: string | null;
  reset_token: string | null;
  reset_token_expiration: string | null;
  created_at: string;
  updated_at: string;
}

export interface AuthResponse {
  user: User;
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  username: string;
}

export interface LoginRequest {
  email: string;
  password: string;
  rememberMe: boolean;
}

// API Functions
export const authApi = {
  register: async (data: RegisterRequest): Promise<AuthResponse> => {
    console.log("Registering user with data:", data);
    const response = await api.post("/register", data);
    console.log("Register response:", response.data);
    return response.data;
  },

  login: async (data: LoginRequest): Promise<AuthResponse> => {
    const response = await api.post("/login", data);
    return response.data;
  },
};

export const userApi = {
  getUsers: async (): Promise<User[]> => {
    const response = await api.get("/users");
    return response.data;
  },
};