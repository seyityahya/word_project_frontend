import {
  InputOTP as CInputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";
import React from "react";

interface FlexibleOTPProps {
  value?: string;
  onChange?: (value: string) => void;
  maxLength?: number;
  pattern?: RegExp;
  segments?: number; // Kaç parçaya bölünsün (1,2,3 vs)
  title?: string;
  subtitle?: string;
}

export function InputOTP({
  value,
  onChange,
  maxLength = 6,
  pattern = REGEXP_ONLY_DIGITS_AND_CHARS,
  segments = 1,
  title,
  subtitle,
}: FlexibleOTPProps) {
  // Her grupta kaç karakter olmalı
  const groupSize = Math.ceil(maxLength / segments);

  const groups = Array.from({ length: segments }, (_, groupIndex) => {
    const slots = [];
    const startIndex = groupIndex * groupSize;
    const endIndex = Math.min(startIndex + groupSize, maxLength);

    for (let i = startIndex; i < endIndex; i++) {
      slots.push(<InputOTPSlot key={i} index={i} />);
    }

    return <InputOTPGroup key={groupIndex}>{slots}</InputOTPGroup>;
  });

  return (
    <div className="flex flex-col items-center gap-2">
      {title && <h2 className="text-xl font-semibold">{title}</h2>}

      <CInputOTP
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        pattern={pattern}
      >
        {groups.map((group, idx) => (
          <React.Fragment key={idx}>
            {group}
            {idx < groups.length - 1 && <InputOTPSeparator />}
          </React.Fragment>
        ))}
      </CInputOTP>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
}
