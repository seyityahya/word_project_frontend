"use client";
import Card from "@/components/core/card";
import InputBox from "@/components/core/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
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
        title="Register"
        className="w-[400px] bg-gray-900/80 backdrop-blur-lg border border-gray-800/50 shadow-xl text-white"
        footer={
          <>
            <Label htmlFor="login" className="text-gray-300 text-xs -mt-5">
              already have an account?{" "}
              <Link
                className="text-blue-500 hover:text-blue-400 font-medium"
                href="/login"
              >
                Sign in
              </Link>
            </Label>
            <Button
              type="submit"
              form="login-form"
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Register
            </Button>
          </>
        }
        footerClassName="flex justify-between"
      >
        <form id="login-form" onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-6">
            <div className="flex flex-col space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Name
              </Label>
              <InputBox
                id="name"
                placeholder="Enter your name"
                value={name}
                icon={<User size={18} />}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-800/60 border-gray-700 text-white placeholder:text-gray-500"
              />
            </div>
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
        <div className="absolute -top-20 -right-15 w-40 h-40 z-15">
          <div className="relative w-full h-full">
            <Image
              src="/domates.png"
              alt="domates"
              fill
              className="object-contain"
              priority
            />
            {/* Gözler: Konumları görsele göre ayarlanmalı */}
            <div
              ref={eyeLeftRef}
              className="absolute top-[42%] left-[38%] w-2.5 h-2.5 bg-black rounded-full transition-transform duration-50"
            />
            <div
              ref={eyeRightRef}
              className="absolute top-[42%] left-[55%] w-2.5 h-2.5 bg-black rounded-full transition-transform duration-50"
            />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Register;
