import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface AccordionItemProps {
    value: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
}

interface CustomAccordionProps {
    items: AccordionItemProps[];
    type?: "single" | "multiple";
    className?: string;
}

export function CustomAccordion({ items, type = "multiple", className = "w-full" }: CustomAccordionProps) {
    return (
        <Accordion type={type} className={className}>
            {items.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                    <AccordionTrigger>{item.trigger}</AccordionTrigger>
                    <AccordionContent>{item.content}</AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}