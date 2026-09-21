import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Toggle } from "./toggle";
import { describe, it, expect, vi } from "vitest";

describe("Toggle", () => {
  it("renders unpressed by default", () => {
    render(<Toggle aria-label="Toggle italic">Italic</Toggle>);
    const toggle = screen.getByRole("button", { name: "Toggle italic" });
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAttribute("data-state", "off");
  });

  it("toggles state on user click", async () => {
    const user = userEvent.setup();
    render(<Toggle aria-label="Toggle bold">Bold</Toggle>);
    const toggle = screen.getByRole("button", { name: "Toggle bold" });

    await user.click(toggle);
    expect(toggle).toHaveAttribute("data-state", "on");

    await user.click(toggle);
    expect(toggle).toHaveAttribute("data-state", "off");
  });

  it("calls onPressedChange callback", async () => {
    const user = userEvent.setup();
    const onPressedChange = vi.fn();
    render(
      <Toggle aria-label="Pin" onPressedChange={onPressedChange}>
        Pin
      </Toggle>
    );

    const toggle = screen.getByRole("button", { name: "Pin" });
    await user.click(toggle);

    expect(onPressedChange).toHaveBeenCalledWith(true);
  });

  it("applies variant and size classes", () => {
    render(
      <Toggle variant="outline" size="sm" aria-label="Outline">
        Outline
      </Toggle>
    );

    const toggle = screen.getByRole("button", { name: "Outline" });
    expect(toggle).toHaveClass("border", "h-9");
  });
});
