import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Delete, Pencil, Trash, Trash2 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      {/* Buttons card */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Button Components</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button>
            Default
          </Button>
          <Button isLoading>
            Loading
          </Button>
          <Button disabled>
            Disabled
          </Button>
          <Button startIcon={<Pencil />}>
            Icon
          </Button>
          <Button endIcon={<Trash />}>
            Icon
          </Button>
          <Button variant="outline">
            Outline
          </Button>
          <Button variant="secondary">
            Secondary
          </Button>
          <Button variant="error">
            Error
          </Button>
          <Button variant="success">
            Success
          </Button>
          <Button variant="warning">
            Warning
          </Button>
          <Button variant="ghost">
            Ghost
          </Button>
          <Button variant="link">
            Link
          </Button>
          <Button variant="iconOnly" size="sm">
            <Pencil className="h-4 w-4" />
          </Button>
          <Button
            variant="iconOnly"
            className="text-destructive hover:bg-destructive/10"
          >
            <Trash2 className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Accordion example */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">Accordion Component</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is this project?</AccordionTrigger>
            <AccordionContent>
              This is a sample project showcasing various UI components styled with Tailwind CSS.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How are the components styled?</AccordionTrigger>
            <AccordionContent>
              Components are styled using Tailwind CSS with a custom purple color theme.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I use these components?</AccordionTrigger>
            <AccordionContent>
              Yes, you can use and customize these components for your own projects.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
