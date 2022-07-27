import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../Home';

describe('render a component with child props', () => {
  test('home to render with a prop', () => {
    render(<Home name='jonel' />);
    const elementWithProp = screen.getByText(/hello my name is bulagtok/i);
    expect(elementWithProp).toBeInTheDocument();
  });
});
// As expected this fails in the runtime since the prop passed is not the same
