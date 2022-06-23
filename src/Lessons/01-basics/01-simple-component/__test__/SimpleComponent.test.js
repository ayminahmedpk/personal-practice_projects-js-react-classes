import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"

import SimpleComponent from "../SimpleComponent";

test('first', () => {
  render(<SimpleComponent />);
  const heading = screen.getByRole('heading');
  // expect(heading.textContent).toBe('A simple component'); // default style
  expect(heading).toHaveTextContent('A simple component'); //extend-expect
})