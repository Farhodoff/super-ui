import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Checkbox } from "./checkbox";
import { describe, it, expect, vi } from "vitest";

describe("Checkbox", () => {
  it("renders unchecked by default", () => {
    render(<Checkbox aria-label="Accept terms" />);
    const checkbox = screen.getByRole("checkbox", { name: "Accept terms" });
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).not.toBeChecked();
  });

  it("can be checked and unchecked on user click", async () => {
    const user = userEvent.setup();
    render(<Checkbox aria-label="Subscribe" />);
    const checkbox = screen.getByRole("checkbox", { name: "Subscribe" });

    await user.click(checkbox);
    expect(checkbox).toBeChecked();

    await user.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("calls onCheckedChange when clicked", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="Confirm" onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Confirm" });

    await user.click(checkbox);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("handles disabled state correctly", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Checkbox aria-label="Disabled option" disabled onCheckedChange={onCheckedChange} />);
    const checkbox = screen.getByRole("checkbox", { name: "Disabled option" });

    expect(checkbox).toBeDisabled();
    await user.click(checkbox);
    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(checkbox).not.toBeChecked();
  });

  it("applies custom className", () => {
    render(<Checkbox aria-label="Custom" className="custom-checkbox-class" />);
    const checkbox = screen.getByRole("checkbox", { name: "Custom" });
    expect(checkbox).toHaveClass("custom-checkbox-class");
  });
});
