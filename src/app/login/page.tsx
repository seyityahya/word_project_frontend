"use client";
import Card from "@/components/core/card";
import InputBox from "@/components/core/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const route = useRouter();
  const eyeLeftRef = useRef(null);
  const eyeRightRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [focusTarget, setFocusTarget] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const moveEye = (eye) => {
        const rect = eye.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = e.clientX - eyeCenterX;
        const dy = e.clientY - eyeCenterY;

        const angle = Math.atan2(dy, dx);
        const distance = Math.min(5, Math.hypot(dx, dy) / 20); // max 5px

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
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    if (res.ok) {
      route.push("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-purple-950 to-gray-900">
      <Card
        title="Sign in"
        className="w-[400px] bg-gray-900/80 backdrop-blur-lg border border-gray-800/50 shadow-xl text-white"
        footer={
          <>
            <Button
              variant="outline"
              className="border-gray-700 text-gray-300 hover:bg-gray-800"
              onClick={() => route.push("/register")}
            >
              Create an account
            </Button>
            <Button
              type="submit"
              form="login-form"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Sign in
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
                type="email"
                placeholder="Enter your email address"
                value={email}
                onFocus={() => setFocusTarget(emailRef.current)}
                onBlur={() => setFocusTarget(null)}
                icon={<Mail size={18} />}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="text-gray-300">
                  Password
                </Label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-purple-400 hover:text-purple-300"
                >
                  Forgot password?
                </Link>
              </div>
              <InputBox
                id="password"
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                value={password}
                onFocus={() => setFocusTarget(passwordRef.current)}
                onBlur={() => setFocusTarget(null)}
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
                onChange={(e) => setPassword(e.target.value)}
                className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
          </div>
        </form>
        <div className="absolute -top-15 -right-15 w-37 h-37 z-15">
          <div className="relative w-full h-full">
            <Image
              src="/patlıcan2.png"
              alt="Patlıcan"
              fill
              className="object-contain"
              priority
            />
            {/* Gözler: Konumları görsele göre ayarlanmalı */}
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
};

export default Login;
