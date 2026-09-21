import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { EmptyState } from "./EmptyState";
import { describe, it, expect, vi } from "vitest";

describe("EmptyState", () => {
  it("renders title and description correctly", () => {
    render(
      <EmptyState
        title="No documents found"
        description="Try adjusting your filters or upload a new file."
      />
    );

    expect(screen.getByText("No documents found")).toBeInTheDocument();
    expect(
      screen.getByText("Try adjusting your filters or upload a new file.")
    ).toBeInTheDocument();
  });

  it("renders action button and handles clicks", async () => {
    const user = userEvent.setup();
    const onAction = vi.fn();

    render(
      <EmptyState
        title="Empty Project"
        action={{
          label: "Create Task",
          onClick: onAction,
        }}
      />
    );

    const button = screen.getByRole("button", { name: "Create Task" });
    expect(button).toBeInTheDocument();

    await user.click(button);
    expect(onAction).toHaveBeenCalledTimes(1);
  });

  it("renders custom icon and children", () => {
    render(
      <EmptyState
        title="Custom Icon"
        icon={<span data-testid="custom-icon">🔍</span>}
      >
        <span data-testid="child-element">Extra info</span>
      </EmptyState>
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(screen.getByTestId("child-element")).toBeInTheDocument();
  });
});
