import { render, screen } from "@testing-library/react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "./pagination";
import { describe, it, expect } from "vitest";

describe("Pagination", () => {
  it("renders pagination navigation with links", () => {
    render(
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    );

    const nav = screen.getByRole("navigation", { name: "pagination" });
    expect(nav).toBeInTheDocument();

    const page1 = screen.getByRole("link", { name: "1" });
    expect(page1).toHaveAttribute("aria-current", "page");

    const prev = screen.getByLabelText("Go to previous page");
    expect(prev).toBeInTheDocument();

    const next = screen.getByLabelText("Go to next page");
    expect(next).toBeInTheDocument();
  });
});
