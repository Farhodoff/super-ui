import React from "react";
import { CodeBlock } from "@/components/CodeBlock";
import { APIReferenceTable } from "@/components/docs/APIReferenceTable";
import { LibraryBadge } from "@/components/library/LibraryBadge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

const alertDialogProps = [
  {
    name: "defaultOpen",
    type: "boolean",
    default: "false",
    description: "The open state of the dialog when it is initially rendered.",
  },
  {
    name: "open",
    type: "boolean",
    description: "The controlled open state of the dialog.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    description: "Event handler called when the open state of the dialog changes.",
  },
];

const importCode = `import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";`;

const basicUsageCode = `<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button variant="destructive">Delete Account</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your
        account and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`;

export const AlertDialogDocs: React.FC = () => {
  return (
    <div className="space-y-12 max-w-4xl">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h1 className="text-4xl font-bold tracking-tight">Alert Dialog</h1>
          <LibraryBadge variant="secondary">Feedback</LibraryBadge>
        </div>
        <p className="text-lg text-muted-foreground">
          A modal dialog that interrupts the user with important content and expects an explicit response.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock language="typescript" code={importCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Example</h2>
        <div className="p-8 rounded-lg border border-border bg-card/50 flex flex-wrap gap-4 items-center justify-center">
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="destructive">Delete Account</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete your account and remove your data.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
        <CodeBlock language="tsx" code={basicUsageCode} />
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">API Reference</h2>
        <APIReferenceTable props={alertDialogProps} />
      </div>
    </div>
  );
};
