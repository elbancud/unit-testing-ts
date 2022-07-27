import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from '../../components/Counter';

describe('onclick state', () => {
  it('adds 1 to the current value', () => {
    const onClick = jest.fn();
    render(<Counter />);

    const buttonElement = screen.getByText('add');
    const divElement = screen.getByRole('contentinfo');

    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent('Count is 1');
  });
});
