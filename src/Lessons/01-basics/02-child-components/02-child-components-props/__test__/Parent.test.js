import React from 'react';
import {render} from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from '@testing-library/user-event';

import Parent from '../Parent.js';



test('Components render properly', () => {
  const { container } = render(<Parent/>);
  const dom = container; // convenience
  expect(dom.querySelector('.parent p')).toHaveTextContent('Parent');
  expect(dom.querySelector('.child p')).toHaveTextContent('Child');
})


test(`Child receives prop implicitly without any mention of 'prop' in component`, async () => {
  const {container} = render(<Parent/>)
  const dom = container;
  expect(dom.querySelector('.received-prop')).toHaveTextContent('Sample Prop');
})


test('Clicks register (console log), but props not saved as state dont change', async () => {
  const {container} = render(<Parent/>)
  const dom = container;
  await userEvent.click(dom.querySelector('.child button'));
})