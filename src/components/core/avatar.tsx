import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";
import { Gender } from "@/enums/gender.enum";
import { Loader2, Mars, Transgender, Venus } from "lucide-react";
import { cn } from "@/lib/utils";

interface ICustomAvatarProps {
    src?: string;
    alt?: string;
    fallback?: React.ReactNode;
    gender?: Gender;
    className?: string;
    fallbackClassName?: string;
}

const CustomAvatar = ({
    src,
    alt,
    fallback,
    gender,
    className,
    fallbackClassName,
}: ICustomAvatarProps) => {
    const [isLoading, setIsLoading] = useState(!!src);

    const getFallbackIconFromGender = (): React.ReactNode => {

        switch (gender) {
            case Gender.male:
                return <Mars className="h-4 w-4" />;
            case Gender.female:
                return <Venus className="h-4 w-4" />;
            case Gender.other:
                return <Transgender className="h-4 w-4" />;
            case Gender.unknown:
                return <span className="text-purple-600">❓</span>;
            default:
                return <span className="text-purple-600">❓</span>;
        }
    };

    const handleImageLoad = () => {
        setIsLoading(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
    };

    return (
        <Avatar className={cn("bg-purple-100", className)}>
            {src && isLoading && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-purple-100 rounded-full">
                    <Loader2 className="h-4 w-4 text-purple-600 animate-spin" />
                </div>
            )}
            <AvatarImage
                src={src}
                alt={alt}
                onLoad={handleImageLoad}
                onError={handleImageError}
            />
            <AvatarFallback className={cn("bg-purple-100 text-purple-600", fallbackClassName)}>
                {fallback ? fallback : getFallbackIconFromGender()}
            </AvatarFallback>
        </Avatar>
    );
};

export default CustomAvatar;