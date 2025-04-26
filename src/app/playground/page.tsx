"use client";
import CheckBox from "@/components/core/checkbox";
import InputBox from "@/components/core/input";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";

export default function Playground() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Hata kontrolü
    if (value.length < 6) {
      setError("Şifre en az 6 karakter olmalı");
    } else {
      setError(""); // Hata kalksın
    }
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      {/* Checkbox card */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Checkbox Component
        </h2>
        <div className="flex flex-col gap-4">
          <CheckBox name="disabled" disabled={true} />
          <CheckBox name="default checked" defaultChecked={true} />
          <CheckBox name="default unchecked" defaultChecked={false} />
          <CheckBox
            name="default unchecked"
            defaultChecked={false}
            description="description description description"
          />
        </div>
      </div>

      {/* input */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Input Component
        </h2>
        <div className="flex flex-col gap-4">
          <InputBox placeholder="Adınızı girin" />
          <InputBox
            id="name"
            label="Ad"
            placeholder="Adınızı girin"
            error="Bu alan zorunludur"
          />
          <InputBox
            id="email"
            label="E-posta"
            placeholder="E-posta adresinizi girin"
            error="Geçerli bir e-posta girin"
          />
          <InputBox
            id="password"
            label="Şifre"
            placeholder="Şifrenizi girin"
            type="password"
          />
          <InputBox
            id="email"
            label="E-posta"
            placeholder="E-posta adresinizi girin"
            type="email"
            icon={<Mail size={18} />}
          />
          <InputBox
            id="password"
            label="Şifre"
            placeholder="Şifrenizi girin"
            type={showPassword ? "text" : "password"}
            icon={<Lock size={18} />}
            value={password}
            onChange={handlePasswordChange}
            error={error}
            rightIcon={
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="focus:outline-none"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}
