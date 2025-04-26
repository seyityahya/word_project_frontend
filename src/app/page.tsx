"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, Pencil, Trash, Trash2 } from "lucide-react";
import { CustomAccordion } from "@/components/core/accordion/CustomAccordion";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import CustomAlertDialog from "@/components/core/alert-dialog/CustomAlertDialog";
import CustomAvatar from "@/components/core/avatar/CustomAvatar";
import { Gender } from "@/enums/gender.enum";
import { Combobox } from "@/components/core/combobox/combobox";

export default function Home() {
  // Example data for combobox
  const frameworkOptions = [
    { value: "next", label: "Next.js" },
    { value: "react", label: "React" },
    { value: "vue", label: "Vue.js" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ];

  const cityOptions = [
    { value: "istanbul", label: "İstanbul" },
    { value: "ankara", label: "Ankara" },
    { value: "izmir", label: "İzmir" },
    { value: "antalya", label: "Antalya" },
    { value: "bursa", label: "Bursa" },
    { value: "adana", label: "Adana" },
    { value: "konya", label: "Konya" },
    { value: "gaziantep", label: "Gaziantep" },
    { value: "kayseri", label: "Kayseri" },
    { value: "mugla", label: "Muğla" },
    { value: "trabzon", label: "Trabzon" },
    { value: "samsun", label: "Samsun" },
    { value: "eskisehir", label: "Eskişehir" },
    { value: "kocaeli", label: "Kocaeli" },
    { value: "tekirdag", label: "Tekirdağ" },
    { value: "edirne", label: "Edirne" },
    { value: "balikesir", label: "Balıkesir" },
    { value: "manisa", label: "Manisa" },
    { value: "denizli", label: "Denizli" },
    { value: "mardin", label: "Mardin" },
    { value: "batman", label: "Batman" },
    { value: "siirt", label: "Siirt" },
    { value: "sanliurfa", label: "Şanlıurfa" },
    { value: "adiyaman", label: "Adıyaman" },
    { value: "malatya", label: "Malatya" },
    { value: "kahramanmaras", label: "Kahramanmaraş" },
    { value: "osmaniye", label: "Osmaniye" },
    { value: "hatay", label: "Hatay" },
    { value: "kilis", label: "Kilis" },
  ];

  const colorOptions = [
    { value: "red", label: "Kırmızı" },
    { value: "blue", label: "Mavi" },
    { value: "green", label: "Yeşil" },
    { value: "yellow", label: "Sarı" },
    { value: "purple", label: "Mor" },
    { value: "orange", label: "Turuncu" },
    { value: "pink", label: "Pembe" },
    { value: "black", label: "Siyah" },
    { value: "white", label: "Beyaz" },
    { value: "gray", label: "Gri" },
    { value: "brown", label: "Kahverengi" },
    { value: "cyan", label: "Camgöbeği" },
    { value: "magenta", label: "Macenta" },
    { value: "lime", label: "Limon Yeşili" },
    { value: "teal", label: "Deniz Mavisi" },
    { value: "navy", label: "Lacivert" },
    { value: "maroon", label: "Bordo" },
    { value: "olive", label: "Zeytin Yeşili" },
  ];

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

      {/* Custom Avatar */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Custom Avatar Component
        </h2>
        <div className="flex items-center gap-4">
          <CustomAvatar
            src="https://picsum.photos/200/300"
            alt="User Avatar"
          />
          <CustomAvatar gender={Gender.male} />
          <CustomAvatar gender={Gender.female} />
          <CustomAvatar gender={Gender.other} />
          <CustomAvatar />
        </div>
      </div>

      {/* Combobox */}
      <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
          Combobox Component
        </h2>
        <div className="flex flex-col gap-4">
          <div>
            <label className="text-sm font-medium mb-1 block">Frameworks (Multiple Select)</label>
            <Combobox
              items={frameworkOptions}
              multiSelect={true}
              placeholder="Select frameworks..."
              searchPlaceholder="Search frameworks..."
              onChange={(values) => console.log("Selected frameworks:", values)}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Cities (Single Select)</label>
            <Combobox
              items={cityOptions}
              placeholder="Select a city..."
              searchPlaceholder="Search cities..."
              onChange={(value) => console.log("Selected city:", value)}
            />
          </div>

          <div>
            <label className="text-sm font-medium mb-1 block">Colors (Multiple Select)</label>
            <Combobox
              items={colorOptions}
              multiSelect={true}
              placeholder="Select colors..."
              searchPlaceholder="Search colors..."
              onChange={(values) => console.log("Selected colors:", values)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
