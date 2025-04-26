"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Pencil, Trash, Trash2 } from "lucide-react";
import { CustomAccordion } from "@/components/core/accordion/CustomAccordion";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import CustomAlertDialog from "@/components/core/alert-dialog/CustomAlertDialog";

export default function Home() {
  const accordionItems = [
    {
      value: "item-1",
      trigger: "What is this project?",
      content:
        "This is a showcase of UI components built with Next.js, Tailwind CSS and shadcn/ui.",
    },
    {
      value: "item-2",
      trigger: "How are the components styled?",
      content:
        "Components are styled using Tailwind CSS with a custom purple color theme.",
    },
    {
      value: "item-3",
      trigger: "Can I use these components?",
      content:
        "Yes, you can use and customize these components for your own projects.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      {/* Buttons card */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Button Components
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button>Default</Button>
          <Button isLoading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button startIcon={<Pencil />}>Icon</Button>
          <Button endIcon={<Trash />}>Icon</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="error">Error</Button>
          <Button variant="success">Success</Button>
          <Button variant="warning">Warning</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
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
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Accordion Component
        </h2>
        <CustomAccordion type="single" items={accordionItems} />
      </div>

      {/* Toast example */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Toast Component
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button
            onClick={() =>
              toast("Default Toast", {
                description: "This is a default toast message.",
                closeButton: true,
              })
            }
          >
            Default Toast
          </Button>
          <Button
            onClick={() =>
              toast.success("Default Success Toast", {
                description: "This is a success toast message.",
                closeButton: true,
              })
            }
          >
            Success Toast
          </Button>
          <Button
            onClick={() =>
              toast.error("Default Error Toast", {
                description: "This is an error toast message.",
              })
            }
          >
            Error Toast
          </Button>
          <Button
            onClick={() =>
              toast.warning("Default Warning Toast", {
                description: "This is a warning toast message.",
                closeButton: true,
              })
            }
          >
            Warning Toast
          </Button>
          <Button
            onClick={() =>
              toast.info("Default Info Toast", {
                description: "This is an info toast message.",
                closeButton: true,
              })
            }
          >
            Info Toast
          </Button>
        </div>

        <h3 className="text-lg font-semibold mt-6 mb-3 text-purple-600 dark:text-purple-400">
          Toast with Action
        </h3>
        <Button
          onClick={() =>
            toast.success("Success Toast with Action", {
              description: "This toast has an action button",
              action: {
                label: "Undo",
                onClick: () => alert("Action clicked!"),
              },
            })
          }
        >
          Toast with Action
        </Button>
      </div>

      {/* Badge */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Badge Component
        </h2>
        <div className="flex flex-wrap gap-4">
          <Badge variant="default">Default</Badge>
          <Badge startIcon={<CheckCircle />}>
            Badge with Icon
          </Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </div>
      </div>

      {/* Alert Dialog */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Alert Dialog Component
        </h2>
        <CustomAlertDialog
          trigger={<Button>Open Alert Dialog</Button>}
          title="Alert Dialog Title"
          description="This is an alert dialog description."
          cancelText="Cancel"
          actionText="Confirm"
          onCancel={() => toast("Cancelled")}
          onAction={() => toast("Confirmed")}
        />
      </div>
    </div>
  );
}
