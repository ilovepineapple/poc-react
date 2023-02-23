import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button>Hello</Button>);

    expect(screen.getByText(/hello/i)).toBeTruthy();
  });
});
