import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Delete, Pencil, Trash, Trash2 } from "lucide-react";
import { CustomAccordion } from "@/components/accordion/CustomAccordion";

export default function Home() {

  const accordionItems = [
    {
      value: "item-1",
      trigger: "What is this project?",
      content: "This is a showcase of UI components built with Next.js, Tailwind CSS and shadcn/ui."
    },
    {
      value: "item-2",
      trigger: "How are the components styled?",
      content: "Components are styled using Tailwind CSS with a custom purple color theme."
    },
    {
      value: "item-3",
      trigger: "Can I use these components?",
      content: "Yes, you can use and customize these components for your own projects."
    }
  ];

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
        <CustomAccordion
          type="single"
          items={accordionItems}
        />
      </div>
    </div>
  );
}
