import React from "react";
import App from "../App";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect.js';

test('First test, checking class and text', () => {
  const myComponent = render(<App />);
  const textDiv = myComponent.getByTestId('text-div');
  expect(textDiv.textContent).toBe('Hi from app');
})