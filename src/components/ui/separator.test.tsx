import { render } from "@testing-library/react";
import { Separator } from "./separator";
import { describe, it, expect } from "vitest";

describe("Separator", () => {
  it("renders horizontal separator by default", () => {
    const { container } = render(<Separator />);
    const separator = container.firstChild as HTMLElement;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("h-[1px]", "w-full");
  });

  it("renders vertical separator when orientation is vertical", () => {
    const { container } = render(<Separator orientation="vertical" />);
    const separator = container.firstChild as HTMLElement;

    expect(separator).toBeInTheDocument();
    expect(separator).toHaveClass("h-full", "w-[1px]");
  });

  it("applies custom className", () => {
    const { container } = render(<Separator className="my-custom-separator" />);
    const separator = container.firstChild as HTMLElement;

    expect(separator).toHaveClass("my-custom-separator");
  });
});
