import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "./collapsible";
import { describe, it, expect } from "vitest";

describe("Collapsible", () => {
  it("renders trigger and hides content by default", () => {
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle Details</CollapsibleTrigger>
        <CollapsibleContent>Hidden details content</CollapsibleContent>
      </Collapsible>
    );

    expect(screen.getByText("Toggle Details")).toBeInTheDocument();
    expect(screen.queryByText("Hidden details content")).not.toBeInTheDocument();
  });

  it("reveals content on trigger click", async () => {
    const user = userEvent.setup();
    render(
      <Collapsible>
        <CollapsibleTrigger>Toggle Details</CollapsibleTrigger>
        <CollapsibleContent>Hidden details content</CollapsibleContent>
      </Collapsible>
    );

    await user.click(screen.getByText("Toggle Details"));
    expect(screen.getByText("Hidden details content")).toBeInTheDocument();
  });
});
