import { describe, it, expect } from "vitest";

import { render, screen } from "@testing-library/react";

import App from "./App";

describe("something truthy and falsy", function () {
  it("should be truthy", function () {
    expect(true).toBeTruthy();
  });
  it("should be falsy", function () {
    expect(false).toBeFalsy();
  });
});

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);

    // screen.debug();

    expect(screen.getByText(/vite \+ react/i)).toBeTruthy();
  });
});
