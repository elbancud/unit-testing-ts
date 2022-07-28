import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../../components/Counter';

describe('onclick state', () => {
  it('adds 1 to the current value', () => {
    const onClick = jest.fn();
    // Render
    render(<Counter />);
    // Div
    const divElement = screen.getByRole('contentinfo');
    const buttonElement = screen.getByText('add');
    // Fire event
    fireEvent.click(buttonElement);
    // Expects
    expect(divElement).toHaveTextContent('Count is 1');
  });
});
