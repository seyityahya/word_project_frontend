import CheckBox from "@/components/core/checkbox";

export default function Playground() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-8">
      {/* Checkbox card */}
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
    </div>
  );
}
