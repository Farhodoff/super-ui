import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { RadioGroup, RadioGroupItem } from "./radio-group";
import { describe, it, expect, vi } from "vitest";

describe("RadioGroup", () => {
  it("renders radio options correctly", () => {
    render(
      <RadioGroup defaultValue="option-1">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-1" id="r1" aria-label="Option 1" />
          <label htmlFor="r1">Option 1</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="option-2" id="r2" aria-label="Option 2" />
          <label htmlFor="r2">Option 2</label>
        </div>
      </RadioGroup>
    );

    const radio1 = screen.getByRole("radio", { name: "Option 1" });
    const radio2 = screen.getByRole("radio", { name: "Option 2" });

    expect(radio1).toBeInTheDocument();
    expect(radio1).toBeChecked();
    expect(radio2).not.toBeChecked();
  });

  it("selects radio option on click", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <RadioGroup defaultValue="apple" onValueChange={onValueChange}>
        <RadioGroupItem value="apple" aria-label="Apple" />
        <RadioGroupItem value="orange" aria-label="Orange" />
      </RadioGroup>
    );

    const orangeRadio = screen.getByRole("radio", { name: "Orange" });
    await user.click(orangeRadio);

    expect(onValueChange).toHaveBeenCalledWith("orange");
    expect(orangeRadio).toBeChecked();
  });

  it("handles disabled radio item correctly", async () => {
    const user = userEvent.setup();
    const onValueChange = vi.fn();

    render(
      <RadioGroup onValueChange={onValueChange}>
        <RadioGroupItem value="free" aria-label="Free plan" />
        <RadioGroupItem value="enterprise" aria-label="Enterprise plan" disabled />
      </RadioGroup>
    );

    const enterpriseRadio = screen.getByRole("radio", { name: "Enterprise plan" });
    expect(enterpriseRadio).toBeDisabled();

    await user.click(enterpriseRadio);
    expect(onValueChange).not.toHaveBeenCalled();
    expect(enterpriseRadio).not.toBeChecked();
  });
});
