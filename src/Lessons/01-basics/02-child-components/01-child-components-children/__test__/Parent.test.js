import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect" // for coolder methods

import Parent from '../Parent';

test('The entire chain renders successfully', () => {
  render(<Parent/>);
  expect(screen.getByTestId('parent')).toHaveTextContent('Parent');
  expect(screen.getByTestId('child')).toHaveTextContent('Child');
  expect(screen.getByTestId('grandchild-1')).toHaveTextContent('Grandchild 1');
  expect(screen.getByTestId('grandchild-2')).toHaveTextContent('Grandchild 2');
})