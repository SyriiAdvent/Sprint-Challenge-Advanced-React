import React from "react";
import { render } from "@testing-library/react";
import App from "./App";
import PlayerCards from './Components/PlayerCards'

test("renders the app header", async () => {
  const { getByText } = render(<App />);
});