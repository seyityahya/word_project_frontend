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
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
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
  className,
  onFocus,
  onBlur,
}: ReusableInputProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && <Label htmlFor={id}>{label}</Label>}
      <div className="relative">
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        {rightIcon && (
          <div className="absolute right-3 top-0 h-full flex items-center justify-center text-gray-500">
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
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
    </div>
  );
}
