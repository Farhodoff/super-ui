import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import { describe, it, expect } from "vitest";

describe("Accordion", () => {
  it("renders accordion trigger titles", () => {
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Section 1")).toBeInTheDocument();
  });

  it("expands accordion content on click", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>Section 1</AccordionTrigger>
          <AccordionContent>Content 1 details</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Section 1");
    await user.click(trigger);

    expect(screen.getByText("Content 1 details")).toBeInTheDocument();
  });

  it("renders multiple accordion items and toggles properly", async () => {
    const user = userEvent.setup();
    render(
      <Accordion type="single" collapsible defaultValue="item-1">
        <AccordionItem value="item-1">
          <AccordionTrigger>Item 1</AccordionTrigger>
          <AccordionContent>Item 1 content</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Item 2</AccordionTrigger>
          <AccordionContent>Item 2 content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Item 1 content")).toBeInTheDocument();

    const trigger2 = screen.getByText("Item 2");
    await user.click(trigger2);

    expect(screen.getByText("Item 2 content")).toBeInTheDocument();
  });
});
