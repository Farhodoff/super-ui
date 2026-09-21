import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./sheet";
import { describe, it, expect } from "vitest";

describe("Sheet", () => {
  it("renders trigger button", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
      </Sheet>
    );

    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("opens sheet on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Panel</SheetTitle>
            <SheetDescription>Panel details</SheetDescription>
          </SheetHeader>
          <div>Body content</div>
        </SheetContent>
      </Sheet>
    );

    const trigger = screen.getByText("Open");
    await user.click(trigger);

    expect(screen.getByText("Sheet Panel")).toBeInTheDocument();
    expect(screen.getByText("Panel details")).toBeInTheDocument();
    expect(screen.getByText("Body content")).toBeInTheDocument();
  });
});
