import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

// Backend için axios instance oluştur
const backendApi = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function GET(request: NextRequest) {
  try {
    // Backend'den tüm kullanıcıları çek
    const response = await backendApi.get("/users");

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Users fetch error:", error);
    
    // Axios error handling
    if (axios.isAxiosError(error) && error.response) {
      return NextResponse.json(
        { message: error.response.data?.message || "Failed to fetch users" },
        { status: error.response.status }
      );
    }
    
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}