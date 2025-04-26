"use client";

import { Button } from "../ui/button";
import { Drawer as UIDrawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerDescription, DrawerFooter, DrawerClose } from "../ui/drawer";

interface ICDrawerProps {
    trigger: React.ReactNode;
    content: React.ReactNode;
    className?: string;
    title?: React.ReactNode;
    description?: React.ReactNode;
    footer?: React.ReactNode;
    hasCloseButton?: boolean;
}

export default function Drawer({
    trigger,
    content,
    className,
    title,
    description,
    footer,
    hasCloseButton = false,
}: ICDrawerProps & React.ComponentProps<typeof UIDrawer> & {
    children?: React.ReactNode
}) {
    return (
        <UIDrawer>
            <DrawerTrigger asChild>{trigger}</DrawerTrigger>
            <DrawerContent className={className}>
                {title && <DrawerHeader>{title}</DrawerHeader>}
                {description && <DrawerDescription>{description}</DrawerDescription>}
                {content}
                {footer && (
                    <DrawerFooter>
                        {footer}
                        {hasCloseButton && (
                            <DrawerClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DrawerClose>
                        )}
                    </DrawerFooter>
                )}
            </DrawerContent>
        </UIDrawer>
    );
}