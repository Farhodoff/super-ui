import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Textarea } from "./textarea";
import { describe, it, expect, vi } from "vitest";

describe("Textarea", () => {
  it("renders properly with placeholder", () => {
    render(<Textarea placeholder="Type your message..." />);
    const textarea = screen.getByPlaceholderText("Type your message...");
    expect(textarea).toBeInTheDocument();
  });

  it("accepts text input from user", async () => {
    const user = userEvent.setup();
    render(<Textarea placeholder="Bio" />);
    const textarea = screen.getByPlaceholderText("Bio");

    await user.type(textarea, "Hello world!\nSecond line.");
    expect(textarea).toHaveValue("Hello world!\nSecond line.");
  });

  it("handles onChange events", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<Textarea onChange={onChange} placeholder="Notes" />);
    const textarea = screen.getByPlaceholderText("Notes");

    await user.type(textarea, "A");
    expect(onChange).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is provided", async () => {
    const user = userEvent.setup();
    render(<Textarea disabled placeholder="Disabled" />);
    const textarea = screen.getByPlaceholderText("Disabled");

    expect(textarea).toBeDisabled();
    await user.type(textarea, "Testing");
    expect(textarea).toHaveValue("");
  });

  it("applies custom className", () => {
    render(<Textarea className="custom-textarea" placeholder="Test" />);
    const textarea = screen.getByPlaceholderText("Test");
    expect(textarea).toHaveClass("custom-textarea");
  });
});
