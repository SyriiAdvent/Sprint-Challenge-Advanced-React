import React from "react";
import { render } from "@testing-library/react";
import PlayerCards from "./PlayerCards";

test("renders the app header", async () => {
  const { getByText } = render(<PlayerCards />);
});