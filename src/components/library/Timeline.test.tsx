import { render, screen } from "@testing-library/react";
import { Timeline } from "./Timeline";
import { describe, it, expect } from "vitest";

describe("Timeline", () => {
  const sampleItems = [
    {
      date: "Jan 2026",
      title: "Project Kickoff",
      description: "Initial planning and setup.",
    },
    {
      date: "Feb 2026",
      title: "Design System Released",
      description: "First version published to NPM.",
    },
  ];

  it("renders timeline items with titles and dates", () => {
    render(<Timeline items={sampleItems} />);

    expect(screen.getByText("Project Kickoff")).toBeInTheDocument();
    expect(screen.getByText("Jan 2026")).toBeInTheDocument();
    expect(screen.getByText("Initial planning and setup.")).toBeInTheDocument();

    expect(screen.getByText("Design System Released")).toBeInTheDocument();
    expect(screen.getByText("Feb 2026")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Timeline items={sampleItems} className="custom-timeline-container" />
    );

    expect(container.firstChild).toHaveClass("custom-timeline-container");
  });
});
