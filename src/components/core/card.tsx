import React, { ReactNode } from "react";
import {
  Card as CnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface CustomCardProps {
  title?: string;
  description?: string;
  className?: string;
  footerClassName?: string;
  children?: ReactNode;
  footer?: ReactNode;
}

const Card: React.FC<CustomCardProps> = ({
  title,
  description,
  className = "",
  children,
  footer,
  footerClassName = "",
}) => {
  return (
    <CnCard className={className}>
      {(title || description) && (
        <CardHeader>
          {title && <CardTitle>{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      {children && <CardContent>{children}</CardContent>}
      {footer && <CardFooter className={footerClassName}>{footer}</CardFooter>}
    </CnCard>
  );
};

export default Card;
