import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const aspectRatioProps = [
  {
    name: "ratio",
    type: "number",
    default: "1",
    description: "The desired ratio (width / height), e.g. 16 / 9.",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes.",
  },
];

const importCode = `import { AspectRatio } from "@/components/ui/aspect-ratio";`;

const basicUsageCode = `<div className="w-[450px]">
  <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
      alt="Photo by Drew Beamer"
      className="h-full w-full object-cover"
    />
  </AspectRatio>
</div>`;

export const AspectRatioDocs: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight">Aspect Ratio</h1>
          <LibraryBadge variant="secondary">Media</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          Displays content within a desired ratio regardless of container dimensions.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock language="typescript" code={importCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example</h2>
        <div className="p-8 rounded-lg border border-border bg-card/50 flex flex-wrap gap-4 items-center justify-center">
          <div className="w-[350px]">
            <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden flex items-center justify-center text-muted-foreground text-sm font-medium">
              16 : 9 Aspect Ratio Container
            </AspectRatio>
          </div>
        </div>
        <CodeBlock language="tsx" code={basicUsageCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <APIReferenceTable props={aspectRatioProps} />
      </div>
    </div>
  );
};
