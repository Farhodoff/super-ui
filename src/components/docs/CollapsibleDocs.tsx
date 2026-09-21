import React, { useState } from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown } from "lucide-react";

const collapsibleProps = [
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "The open state of the collapsible when it is initially rendered.",
  },
  {
    name: "open",
    type: "boolean",
    description: "The controlled open state of the collapsible.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Event handler called when the open state changes.",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "When true, prevents user interaction.",
  },
];

const importCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";`;

const basicUsageCode = `const [isOpen, setIsOpen] = useState(false);

<Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
  <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
    <h4 className="text-sm font-semibold">@peduarte starred 3 repositories</h4>
    <CollapsibleTrigger asChild>
      <Button variant="ghost" size="sm">
        <ChevronsUpDown className="h-4 w-4" />
      </Button>
    </CollapsibleTrigger>
  </div>
  <div className="rounded-md border px-4 py-2 text-sm">
    @radix-ui/primitives
  </div>
  <CollapsibleContent className="space-y-2">
    <div className="rounded-md border px-4 py-2 text-sm">
      @radix-ui/colors
    </div>
    <div className="rounded-md border px-4 py-2 text-sm">
      @stitches/react
    </div>
  </CollapsibleContent>
</Collapsible>`;

export const CollapsibleDocs: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight">Collapsible</h1>
          <LibraryBadge variant="secondary">Layout</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          An interactive component which expands/collapses a panel of content.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock language="typescript" code={importCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example</h2>
        <div className="p-8 rounded-lg border border-border bg-card/50 flex flex-wrap gap-4 items-center justify-center">
          <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-[350px] space-y-2">
            <div className="flex items-center justify-between space-x-4 px-4 py-2 border rounded-md">
              <h4 className="text-sm font-semibold">Repositories (3)</h4>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="sm">
                  <ChevronsUpDown className="h-4 w-4" />
                  <span className="sr-only">Toggle</span>
                </Button>
              </CollapsibleTrigger>
            </div>
            <div className="rounded-md border px-4 py-2 text-sm">
              @farhod_dev/super-ui
            </div>
            <CollapsibleContent className="space-y-2">
              <div className="rounded-md border px-4 py-2 text-sm">
                @farhod_dev/super-ui-cli
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                @radix-ui/primitives
              </div>
            </CollapsibleContent>
          </Collapsible>
        </div>
        <CodeBlock language="tsx" code={basicUsageCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <APIReferenceTable props={collapsibleProps} />
      </div>
    </div>
  );
};
