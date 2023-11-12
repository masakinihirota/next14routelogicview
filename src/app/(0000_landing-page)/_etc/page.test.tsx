import { render, screen } from "@testing-library/react";
import React from "react";
import { expect, test } from "vitest";

import Home from "../page";

test("App Router: Works with Client Components", () => {
  render(<Home />);
  expect(
    screen.getByRole("heading", {
      level: 1,
      name: "VNS.BLUE TOP PAGE landing page",
    })
  ).toBeDefined();
});
