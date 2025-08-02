"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Card from "@/components/core/card";
import InputBox from "@/components/core/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLogin } from "@/lib/hooks/api-hooks";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);

  const loginMutation = useLogin();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveEye = (eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const distance = Math.min(5, Math.hypot(dx, dy) / 20);

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        eye.style.transform = `translate(${x}px, ${y}px)`;
      };

      if (eyeLeftRef.current && eyeRightRef.current) {
        moveEye(eyeLeftRef.current);
        moveEye(eyeRightRef.current);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await loginMutation.mutateAsync({
        email: formData.email,
        password: formData.password,
      });
      toast.success("Giriş başarılı!");
      route.push("/");
    } catch (error: any) {
      toast.error(error.message || "Giriş başarısız!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, type, checked, value } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <Card
        title="Login"
        className="w-[400px] bg-gray-900/80 backdrop-blur-lg border border-gray-800/50 shadow-xl text-white"
        footer={
          <>
            <Label htmlFor="register" className="text-gray-300 text-xs -mt-5">
              don't have an account?{" "}
              <Link
                className="text-blue-500 hover:text-blue-400 font-medium"
                href="/register"
              >
                Sign up
              </Link>
            </Label>
            <Button
              type="submit"
              form="login-form"
              className="bg-blue-600 hover:bg-blue-700 text-white"
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? "Logging in..." : "Login"}
            </Button>
          </>
        }
        footerClassName="flex justify-between"
      >
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="email" className="text-gray-300">
                Email
              </Label>
              <InputBox
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                value={formData.email}
                icon={<Mail size={18} />}
                onChange={handleChange}
                className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-500"
                disabled={loginMutation.isPending}
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
              </div>
              <InputBox
                id="password"
                name="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                icon={<Lock size={18} />}
                rightIcon={
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                }
                onChange={handleChange}
                className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-500"
                disabled={loginMutation.isPending}
              />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onCheckedChange={(checked) =>
                  setFormData({ ...formData, rememberMe: checked as boolean })
                }
                disabled={loginMutation.isPending}
              />
              <Label htmlFor="rememberMe" className="text-sm text-gray-300">
                Remember me
              </Label>
            </div>
          </div>
        </form>

        {loginMutation.error && (
          <p className="text-sm text-red-400 mt-4">
            Error:{" "}
            {(loginMutation.error as any)?.response?.data?.message ||
              "Login failed"}
          </p>
        )}

        <div className="absolute -top-20 -right-15 w-40 h-40 z-15">
          <div className="relative w-full h-full">
            <Image
              src="/patlıcan2.png"
              alt="patlıcan"
              fill
              className="object-contain"
              priority
            />
            <div
              ref={eyeLeftRef}
              className="absolute top-[39%] left-[37%] w-2.5 h-2.5 bg-black rounded-full transition-transform duration-60"
            />
            <div
              ref={eyeRightRef}
              className="absolute top-[39%] left-[55%] w-2.5 h-2.5 bg-black rounded-full transition-transform duration-60"
            />
          </div>
        </div>
      </Card>
    </div>
  );
}
