import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { Separator } from "@/components/ui/separator";

const separatorProps = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "The orientation of the separator.",
  },
  {
    name: "decorative",
    type: "boolean",
    default: "true",
    description: "Whether the component is purely decorative or provides semantic structure.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes applied to the separator.",
  },
];

const importCode = `import { Separator } from "@/components/ui/separator";`;

const basicUsageCode = `<div>
  <div className="space-y-1">
    <h4 className="text-sm font-medium leading-none">Super UI</h4>
    <p className="text-sm text-muted-foreground">
      An open-source UI component library.
    </p>
  </div>
  <Separator className="my-4" />
  <div className="flex h-5 items-center space-x-4 text-sm">
    <div>Blog</div>
    <Separator orientation="vertical" />
    <div>Docs</div>
    <Separator orientation="vertical" />
    <div>Source</div>
  </div>
</div>`;

export const SeparatorDocs: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight">Separator</h1>
          <LibraryBadge variant="secondary">Data Display</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Visually or semantically separates content in a layout.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock language="typescript" code={importCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example</h2>
        <div className="p-8 rounded-lg border border-border bg-card/50 flex flex-wrap gap-4 items-center justify-center">
          <div className="w-[300px]">
            <div className="space-y-1">
              <h4 className="text-sm font-medium leading-none">Super UI</h4>
              <p className="text-sm text-muted-foreground">
                Accessible React component library.
              </p>
            </div>
            <Separator className="my-4" />
            <div className="flex h-5 items-center space-x-4 text-sm">
              <div>Blog</div>
              <Separator orientation="vertical" />
              <div>Docs</div>
              <Separator orientation="vertical" />
              <div>Source</div>
            </div>
          </div>
        </div>
        <CodeBlock language="tsx" code={basicUsageCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <APIReferenceTable props={separatorProps} />
      </div>
    </div>
  );
};
