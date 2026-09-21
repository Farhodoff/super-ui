import { render, screen } from "@testing-library/react";
import { AspectRatio } from "./aspect-ratio";
import { describe, it, expect } from "vitest";

describe("AspectRatio", () => {
  it("renders children with specified ratio", () => {
    render(
      <div style={{ width: "300px" }}>
        <AspectRatio ratio={16 / 9}>
          <img src="test.jpg" alt="Test image" />
        </AspectRatio>
      </div>
    );

    const img = screen.getByAltText("Test image");
    expect(img).toBeInTheDocument();
  });
});
