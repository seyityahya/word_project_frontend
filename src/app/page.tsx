import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24 gap-4">
      <Button>
        Default
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

    </div>
  );
}
