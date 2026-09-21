import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { DatePicker } from "./DatePicker";
import { describe, it, expect } from "vitest";

describe("DatePicker", () => {
  it("renders placeholder when no date is provided", () => {
    render(<DatePicker placeholder="Select event date" />);
    expect(screen.getByText("Select event date")).toBeInTheDocument();
  });

  it("renders formatted date when date is selected", () => {
    const testDate = new Date(2026, 0, 15); // Jan 15, 2026
    render(<DatePicker date={testDate} />);
    expect(screen.getByText(/January 15th, 2026/i)).toBeInTheDocument();
  });

  it("opens calendar popover when clicked", async () => {
    const user = userEvent.setup();
    render(<DatePicker placeholder="Choose date" />);

    const trigger = screen.getByText("Choose date");
    await user.click(trigger);

    // Calendar table or grid should now be visible in popover
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });
});
