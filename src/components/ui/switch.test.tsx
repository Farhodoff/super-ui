import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Switch } from "./switch";
import { describe, it, expect, vi } from "vitest";

describe("Switch", () => {
  it("renders unchecked by default", () => {
    render(<Switch aria-label="Airplane mode" />);
    const switchEl = screen.getByRole("switch", { name: "Airplane mode" });
    expect(switchEl).toBeInTheDocument();
    expect(switchEl).not.toBeChecked();
  });

  it("toggles state on user click", async () => {
    const user = userEvent.setup();
    render(<Switch aria-label="Dark mode" />);
    const switchEl = screen.getByRole("switch", { name: "Dark mode" });

    await user.click(switchEl);
    expect(switchEl).toBeChecked();

    await user.click(switchEl);
    expect(switchEl).not.toBeChecked();
  });

  it("calls onCheckedChange when toggled", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Notifications" onCheckedChange={onCheckedChange} />);
    const switchEl = screen.getByRole("switch", { name: "Notifications" });

    await user.click(switchEl);
    expect(onCheckedChange).toHaveBeenCalledWith(true);
  });

  it("does not toggle when disabled", async () => {
    const user = userEvent.setup();
    const onCheckedChange = vi.fn();
    render(<Switch aria-label="Disabled switch" disabled onCheckedChange={onCheckedChange} />);
    const switchEl = screen.getByRole("switch", { name: "Disabled switch" });

    expect(switchEl).toBeDisabled();
    await user.click(switchEl);
    expect(onCheckedChange).not.toHaveBeenCalled();
    expect(switchEl).not.toBeChecked();
  });

  it("applies custom className", () => {
    render(<Switch aria-label="Custom" className="custom-switch-class" />);
    const switchEl = screen.getByRole("switch", { name: "Custom" });
    expect(switchEl).toHaveClass("custom-switch-class");
  });
});
