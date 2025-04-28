"use client";
import CheckBox from "@/components/core/checkbox";
import InputBox from "@/components/core/input";
import { DialogBase } from "@/components/core/dialog";
import { Button } from "@/components/ui/button";
import { CustomSelect, GroupedSelect } from "@/components/core/select";
import { CheckCircle, Eye, EyeOff, Lock, Mail, Pencil, Trash, Trash2 } from "lucide-react";
import { useState } from "react";
import { InputOTP } from "@/components/core/input-otp";
import { CustomAccordion } from "@/components/core/accordion";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import CustomAlertDialog from "@/components/core/alert-dialog";
import CustomAvatar from "@/components/core/avatar";
import { Gender } from "@/enums/gender.enum";
import { Combobox } from "@/components/core/combobox";
import Drawer from "@/components/core/drawer";
import { Label } from "@/components/ui/label";
import Input from "@/components/core/input";
import { Checkbox } from "@/components/ui/checkbox";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export default function Playground() {
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
      {/* Theme Switcher Card */}
      <ThemeSwitcherComponent />

      {/* Checkbox card */}
      <CheckBoxComponent />

      {/* input */}
      <InputComponent />

      {/* select */}
      <SelectComponent />

      {/* Dialog */}
      <DialogComponent />

      {/* input otp */}
      <OTPComponent />

      {/* Buttons card */}
      <ButtonComponent />

      {/* Accordion example */}
      <AccordionComponent items={accordionItems} />

      {/* Toast example */}
      <ToastComponent />

      {/* Badge */}
      <BadgeComponent />

      {/* Alert Dialog */}
      <AlertDialogComponent />

      {/* Custom Avatar */}
      <AvatarComponent />

      {/* Combobox */}
      <ComboboxComponent
        frameworkOptions={frameworkOptions}
        cityOptions={cityOptions}
        colorOptions={colorOptions}
      />

      {/* Drawer */}
      <DrawerComponent />
    </div>
  );
}

const CheckBoxComponent = () => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Checkbox Component
      </h2>
      <div className="flex flex-col gap-4">
        <CheckBox name="disabled" disabled={true} />
        <CheckBox name="default checked" defaultChecked={true} />
        <CheckBox name="default unchecked" defaultChecked={false} />
        <CheckBox
          name="default unchecked"
          defaultChecked={false}
          description="description description description"
        />
      </div>
    </div>
  );
};

const InputComponent = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    // Hata kontrolü
    if (value.length < 6) {
      setError("Şifre en az 6 karakter olmalı");
    } else {
      setError(""); // Hata kalksın
    }
  };

  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Input Component
      </h2>
      <div className="flex flex-col gap-4">
        <InputBox placeholder="Adınızı girin" className="max-w-sm" />
        <InputBox
          id="name"
          label="Ad"
          placeholder="Adınızı girin"
          error="Bu alan zorunludur"
          className="max-w-sm"
        />
        <InputBox
          id="email"
          label="E-posta"
          placeholder="E-posta adresinizi girin"
          error="Geçerli bir e-posta girin"
          className="max-w-sm"
        />
        <InputBox
          id="password"
          label="Şifre"
          placeholder="Şifrenizi girin"
          type="password"
          className="max-w-sm"
        />
        <InputBox
          id="email"
          label="E-posta"
          placeholder="E-posta adresinizi girin"
          type="email"
          icon={<Mail size={18} />}
          className="max-w-sm"
        />
        <InputBox
          id="password"
          label="Şifre"
          placeholder="Şifrenizi girin"
          type={showPassword ? "text" : "password"}
          icon={<Lock size={18} />}
          value={password}
          onChange={handlePasswordChange}
          error={error}
          className="max-w-sm"
          rightIcon={
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="focus:outline-none"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          }
        />
      </div>
    </div>
  );
};

const SelectComponent = () => {
  const fruitOptions = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Blueberry", value: "blueberry" },
    { label: "Grapes", value: "grapes" },
    { label: "Pineapple", value: "pineapple" },
  ];

  const groupedOptions = [
    {
      label: "Fruits",
      options: [
        { label: "Apple", value: "apple" },
        { label: "Banana", value: "banana" },
        { label: "Grapes", value: "grapes" },
      ],
    },
    {
      label: "Vegetables",
      options: [
        { label: "Carrot", value: "carrot" },
        { label: "Broccoli", value: "broccoli" },
        { label: "Spinach", value: "spinach" },
      ],
    },
  ];
  const [selectedFruit, setSelectedFruit] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Select Component
      </h2>
      <div className="flex flex-col gap-4">
        <CustomSelect
          dataSource={fruitOptions}
          value={selectedFruit}
          onChange={setSelectedFruit}
          placeholder="Select a fruit"
          label="Fruits"
        />
        <GroupedSelect
          data={groupedOptions}
          value={selectedValue}
          onChange={setSelectedValue}
        />
      </div>
    </div>
  );
};

const DialogComponent = () => {
  const [openDialog, setOpenDialog] = useState(false);
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Dialog Component
      </h2>
      <div className="flex flex-col gap-4">
        <Button onClick={() => setOpenDialog(true)}>Open Dialog</Button>
        <DialogBase
          open={openDialog}
          onOpenChange={setOpenDialog}
          title="Edit profile"
          description="Make changes to your profile here. Click save when you're done."
          footer={<Button type="submit">Save changes</Button>}
        >
          <div className="grid gap-4">
            <div className="grid items-center gap-4 width-full">
              <InputBox
                id="name"
                label="name"
                placeholder="name"
                className="max-w-sm"
              />
            </div>
            <div className="grid items-center gap-4 width-full">
              <InputBox
                id="username"
                label="username"
                placeholder="username"
                className="max-w-md"
              />
            </div>
          </div>
        </DialogBase>
      </div>
    </div>
  );
};

const OTPComponent = () => {
  const [otp, setOtp] = useState("");
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl gap-8">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Input Otp Component
      </h2>
      <div className="flex flex-col gap-4">
        <InputOTP
          value={otp}
          onChange={(val) => setOtp(val)}
          maxLength={6}
          segments={2}
        />
        <InputOTP
          value={otp}
          onChange={(val) => setOtp(val)}
          maxLength={6}
          segments={3}
        />
        <InputOTP
          value={otp}
          onChange={(val) => setOtp(val)}
          maxLength={6}
          segments={1}
        />
        <InputOTP
          value={otp}
          onChange={(val) => setOtp(val)}
          maxLength={6}
          segments={1}
          title="OTP Kodunuzu Girin"
          subtitle="Telefonunuza gönderilen 6 haneli kodu giriniz."
        />
      </div>
    </div>
  );
};

// New components from home page

const ButtonComponent = () => {
  return (
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
  );
};

const AccordionComponent = ({ items }: { items: any[] }) => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Accordion Component
      </h2>
      <CustomAccordion type="single" items={items} />
    </div>
  );
};

const ToastComponent = () => {
  return (
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
  );
};

const BadgeComponent = () => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Badge Component
      </h2>
      <div className="flex flex-wrap gap-4">
        <Badge variant="default">Default</Badge>
        <Badge startIcon={<CheckCircle />}>Badge with Icon</Badge>
        <Badge variant="error">Error</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="ghost">Ghost</Badge>
        <Badge variant="link">Link</Badge>
      </div>
    </div>
  );
};

const AlertDialogComponent = () => {
  return (
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
  );
};

const AvatarComponent = () => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Custom Avatar Component
      </h2>
      <div className="flex items-center gap-4">
        <CustomAvatar src="https://picsum.photos/200/300" alt="User Avatar" />
        <CustomAvatar gender={Gender.male} />
        <CustomAvatar gender={Gender.female} />
        <CustomAvatar gender={Gender.other} />
        <CustomAvatar />
      </div>
    </div>
  );
};

const ComboboxComponent = ({
  frameworkOptions,
  cityOptions,
  colorOptions
}: {
  frameworkOptions: any[],
  cityOptions: any[],
  colorOptions: any[]
}) => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Combobox Component
      </h2>
      <div className="flex flex-col gap-4">
        <div>
          <label className="text-sm font-medium mb-1 block">
            Frameworks (Multiple Select)
          </label>
          <Combobox
            items={frameworkOptions}
            multiSelect={true}
            placeholder="Select frameworks..."
            searchPlaceholder="Search frameworks..."
            onChange={(values) => console.log("Selected frameworks:", values)}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">
            Cities (Single Select)
          </label>
          <Combobox
            items={cityOptions}
            placeholder="Select a city..."
            searchPlaceholder="Search cities..."
            onChange={(value) => console.log("Selected city:", value)}
          />
        </div>

        <div>
          <label className="text-sm font-medium mb-1 block">
            Colors (Multiple Select)
          </label>
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
  );
};

const DrawerComponent = () => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Drawer Component
      </h2>
      <div className="flex flex-col gap-4">
        <Drawer
          trigger={<Button variant="outline">Başlıklı Drawer</Button>}
          title="Drawer Başlığı"
          description="Bu bir açıklama metnidir. Drawer'ın amacını açıklar."
          content={
            <div className="p-4">
              <p>Drawer içeriği burada yer alır.</p>
            </div>
          }
        />
        <Drawer
          trigger={<Button>Temel Drawer</Button>}
          content={
            <div className="p-4">
              <p>Bu bir temel drawer içeriğidir.</p>
            </div>
          }
        />
        <Drawer
          trigger={<Button variant="secondary">Footer&apos;lı Drawer</Button>}
          title="İşlem Yap"
          content={
            <div className="p-4">
              <p>İşlem yapmak istediğinize emin misiniz?</p>
            </div>
          }
          footer={
            <Button
              className="w-full"
              onClick={() => alert("İşlem tamamlandı!")}
            >
              Onayla
            </Button>
          }
          hasCloseButton={true}
        />
        <Drawer
          trigger={<Button variant="outline">Form Aç</Button>}
          title="Kullanıcı Bilgileri"
          content={
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ad Soyad</Label>
                <Input id="name" placeholder="Ad Soyad giriniz" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-posta</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="E-posta giriniz"
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms">Şartları kabul ediyorum</Label>
              </div>
            </div>
          }
          footer={
            <div className="flex flex-col gap-2 w-full">
              <Button className="w-full">Kaydet</Button>
              <Button variant="outline" className="w-full">
                İptal
              </Button>
            </div>
          }
        />
        <Drawer
          trigger={<Button>Uzun İçerik</Button>}
          title="Kullanım Koşulları"
          description="Lütfen aşağıdaki koşulları okuyunuz."
          content={
            <div className="p-4">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                nisl nunc quis nisl.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                nisl nunc quis nisl.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                nisl nunc quis nisl.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                nisl nunc quis nisl.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                nisl nunc quis nisl.
              </p>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet
                nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl
                eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam
                nisl nunc quis nisl.
              </p>
            </div>
          }
          footer={
            <Button variant="outline" className="w-full">
              Kabul Ediyorum
            </Button>
          }
        />

        <Drawer
          trigger={<Button variant="ghost">Hayalet Buton</Button>}
          title="Ghost Buton ile Açıldı"
          content={<div className="p-4">İçerik</div>}
        />

        <Drawer
          trigger={
            <span className="text-purple-600 underline cursor-pointer">
              Metin Bağlantısı
            </span>
          }
          title="Metin ile Açıldı"
          content={<div className="p-4">İçerik</div>}
        />

        <Drawer
          trigger={
            <div className="border border-purple-200 p-2 rounded cursor-pointer hover:bg-purple-50">
              <p>Özel Bir Element</p>
              <p className="text-xs text-gray-500">
                Tıkla ve drawer&apos;ı aç
              </p>
            </div>
          }
          title="Özel Element ile Açıldı"
          content={<div className="p-4">İçerik</div>}
        />
      </div>
    </div>
  );
};

const ThemeSwitcherComponent = () => {
  return (
    <div className="bg-card shadow-lg rounded-lg p-6 w-full max-w-3xl">
      <h2 className="text-xl font-bold mb-4 text-purple-600 dark:text-purple-400">
        Theme Switcher
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <p className="text-foreground">
            Change your preferred theme (Light/Dark/System)
          </p>
          <ThemeSwitcher />
        </div>
        <div className="mt-4 p-4 bg-background border border-border rounded-md">
          <p className="text-muted-foreground text-sm mb-2">Theme demonstration</p>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-3 rounded border border-border">Card background</div>
            <div className="bg-popover p-3 rounded border border-border">Popover background</div>
            <div className="bg-primary text-primary-foreground p-3 rounded">Primary color</div>
            <div className="bg-secondary text-secondary-foreground p-3 rounded">Secondary color</div>
            <div className="bg-muted text-muted-foreground p-3 rounded">Muted color</div>
            <div className="bg-accent text-accent-foreground p-3 rounded">Accent color</div>
            <div className="bg-destructive text-destructive-foreground p-3 rounded">Destructive color</div>
            <div className="bg-purple-600 text-white p-3 rounded">Purple theme color</div>
          </div>
        </div>
      </div>
    </div>
  );
};
