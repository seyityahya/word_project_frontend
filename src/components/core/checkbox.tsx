"use client";
import { useState, ReactNode } from "react";
import { Checkbox } from "../ui/checkbox";

interface CheckBoxProps {
  name?: string;
  id?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  onClick?: () => void;
  className?: string;
  description?: ReactNode;
}

export default function CheckBox({
  name,
  id = "checkbox",
  defaultChecked = false,
  disabled = false,
  onChange,
  onClick,
  className,
  description,
}: CheckBoxProps) {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange = (isChecked: boolean) => {
    setChecked(isChecked);
    onChange?.(isChecked);
  };

  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`items-top flex space-x-2 ${className || ""}`}
      onClick={handleClick}
    >
      <Checkbox
        id={id}
        checked={checked}
        onCheckedChange={handleChange}
        disabled={disabled}
      />
      <div className="grid gap-1.5 leading-none">
        {name && (
          <label
            htmlFor={id}
            className="text-sm font-medium leading-none cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {name}
          </label>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  );
}
