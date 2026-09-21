import { render, screen } from "@testing-library/react";
import { Slider } from "./slider";
import { describe, it, expect } from "vitest";

describe("Slider", () => {
  it("renders slider component with role slider", () => {
    render(<Slider defaultValue={[50]} max={100} step={1} />);
    const slider = screen.getByRole("slider");
    expect(slider).toBeInTheDocument();
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  });

  it("handles min and max attributes properly", () => {
    render(<Slider defaultValue={[20]} min={0} max={200} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "200");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Slider defaultValue={[25]} className="custom-slider-class" />
    );
    expect(container.firstChild).toHaveClass("custom-slider-class");
  });
});
