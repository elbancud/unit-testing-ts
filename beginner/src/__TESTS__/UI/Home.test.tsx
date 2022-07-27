import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../../Home';

describe('component', () => {
  it('render with props', () => {
    render(<Home name='prop' />);
    const elementWithProp = screen.getByText(/hello my name is propw/);
    expect(elementWithProp).toBeInTheDocument();
  });
});
