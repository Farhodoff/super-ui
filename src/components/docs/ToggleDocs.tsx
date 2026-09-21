import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

const toggleProps = [
  {
    name: "pressed",
    type: "boolean",
    description: "The controlled pressed state of the toggle.",
  },
  {
    name: "defaultPressed",
    type: "boolean",
    default: "false",
    description: "The pressed state of the toggle when initially rendered.",
  },
  {
    name: "onPressedChange",
    type: "(pressed: boolean) => void",
    description: "Event handler called when the pressed state changes.",
  },
  {
    name: "variant",
    type: '"default" | "outline"',
    default: '"default"',
    description: "The visual style variant.",
  },
  {
    name: "size",
    type: '"default" | "sm" | "lg"',
    default: '"default"',
    description: "The size of the toggle button.",
  },
];

const importCode = `import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";`;

const basicUsageCode = `<Toggle aria-label="Toggle italic">
  <Italic className="h-4 w-4" />
</Toggle>

<Toggle variant="outline" aria-label="Toggle bold">
  <Bold className="h-4 w-4" />
</Toggle>

<Toggle size="sm" aria-label="Toggle underline">
  <Underline className="h-4 w-4" />
</Toggle>`;

export const ToggleDocs: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight">Toggle</h1>
          <LibraryBadge variant="secondary">Form</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          A two-state button that can be either on or off.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock language="typescript" code={importCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example</h2>
        <div className="p-8 rounded-lg border border-border bg-card/50 flex flex-wrap gap-4 items-center justify-center">
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle size="sm" aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
        <CodeBlock language="tsx" code={basicUsageCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <APIReferenceTable props={toggleProps} />
      </div>
    </div>
  );
};
