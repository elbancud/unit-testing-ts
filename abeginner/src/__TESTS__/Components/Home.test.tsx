import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../Home';
// Method 1
describe('component', () => {
  it('render with props', () => {
    render(<Home name='prop' />);
    const elementWithProp = screen.getByText(/hello my name is prop/);
    expect(elementWithProp).toBeInTheDocument();
  });
});
// Method 2
test('has role and renders a content', () => {
  render(<Home name='prop' />);
  const divElement = screen.getByRole('contentinfo');
  expect(divElement).toHaveTextContent('hi my name is bulagtok sumuko ka na');
});
