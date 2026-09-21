import { render, screen } from "@testing-library/react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./hover-card";
import { describe, it, expect } from "vitest";

describe("HoverCard", () => {
  it("renders trigger text", () => {
    render(
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="https://github.com">@nextjs</a>
        </HoverCardTrigger>
        <HoverCardContent>Next.js framework preview</HoverCardContent>
      </HoverCard>
    );

    expect(screen.getByText("@nextjs")).toBeInTheDocument();
  });
});
