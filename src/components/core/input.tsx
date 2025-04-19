import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ReusableInputProps {
  id?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  error?: string;
  icon?: ReactNode;
  rightIcon?: ReactNode;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputBox({
  id,
  label,
  placeholder,
  type = "text",
  error,
  icon,
  rightIcon,
  value,
  onChange,
}: ReusableInputProps) {
  return (
    <div className="w-full max-w-sm space-y-2">
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {rightIcon}
          </div>
        )}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          className={cn(icon && "pl-10", error && "border-red-500")}
          value={value}
          onChange={onChange}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
