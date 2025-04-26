"use client";
import CheckBox from "@/components/core/checkbox";
import InputBox from "@/components/core/input";
import { DialogBase } from "@/components/core/dialog";
import { Button } from "@/components/ui/button";
import { CustomSelect, GroupedSelect } from "@/components/core/select";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { useState } from "react";
import { InputOTP } from "@/components/core/input-otp";

const fruitOptions = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Blueberry", value: "blueberry" },
  { label: "Grapes", value: "grapes" },
  { label: "Pineapple", value: "pineapple" },
];

const groupedOptions = [
  {
    label: "Fruits",
    options: [
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Grapes", value: "grapes" },
    ],
  },
  {
    label: "Vegetables",
    options: [
      { label: "Carrot", value: "carrot" },
      { label: "Broccoli", value: "broccoli" },
      { label: "Spinach", value: "spinach" },
    ],
  },
];

export default function Playground() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [otp, setOtp] = useState("");

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
          <InputBox placeholder="Adınızı girin" className="max-w-sm" />
          <InputBox
            id="name"
            label="Ad"
            placeholder="Adınızı girin"
            error="Bu alan zorunludur"
            className="max-w-sm"
          />
          <InputBox
            id="email"
            label="E-posta"
            placeholder="E-posta adresinizi girin"
            error="Geçerli bir e-posta girin"
            className="max-w-sm"
          />
          <InputBox
            id="password"
            label="Şifre"
            placeholder="Şifrenizi girin"
            type="password"
            className="max-w-sm"
          />
          <InputBox
            id="email"
            label="E-posta"
            placeholder="E-posta adresinizi girin"
            type="email"
            icon={<Mail size={18} />}
            className="max-w-sm"
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
            className="max-w-sm"
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
      {/* select */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Select Component
        </h2>
        <div className="flex flex-col gap-4">
          <CustomSelect
            dataSource={fruitOptions}
            value={selectedFruit}
            onChange={setSelectedFruit}
            placeholder="Select a fruit"
            label="Fruits"
          />
          <GroupedSelect
            data={groupedOptions}
            value={selectedValue}
            onChange={setSelectedValue}
          />
        </div>
      </div>

      {/* Dialog */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Dialog Component
        </h2>
        <div className="flex flex-col gap-4">
          <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
          <DialogBase
            open={openDialog}
            onOpenChange={setOpenDialog}
            title="Edit profile"
            description="Make changes to your profile here. Click save when you're done."
            footer={<Button type="submit">Save changes</Button>}
          >
            <div className="grid gap-4">
              <div className="grid items-center gap-4 width-full">
                <InputBox
                  id="name"
                  label="name"
                  placeholder="name"
                  className="max-w-sm"
                />
              </div>
              <div className="grid items-center gap-4 width-full">
                <InputBox
                  id="username"
                  label="username"
                  placeholder="username"
                  className="max-w-md"
                />
              </div>
            </div>
          </DialogBase>
        </div>
      </div>

      {/* input otp */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Input Otp Component
        </h2>
        <div className="flex flex-col gap-4">
          <InputOTP
            value={otp}
            onChange={(val) => setOtp(val)}
            maxLength={6}
            segments={2}
          />
          <InputOTP
            value={otp}
            onChange={(val) => setOtp(val)}
            maxLength={6}
            segments={3}
          />
          <InputOTP
            value={otp}
            onChange={(val) => setOtp(val)}
            maxLength={6}
            segments={1}
          />
          <InputOTP
            value={otp}
            onChange={(val) => setOtp(val)}
            maxLength={6}
            segments={1}
            title="OTP Kodunuzu Girin"
            subtitle="Telefonunuza gönderilen 6 haneli kodu giriniz."
          />
        </div>
      </div>
    </div>
  );
}
