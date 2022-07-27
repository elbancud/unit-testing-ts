import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ButtonWrapper } from '../../components/ButtonWrapper';

describe('fire event', () => {
  it('detects when an event was fired', () => {
    // Call the fire event
    const onClick = jest.fn();
    // Render
    render(<ButtonWrapper onClick={onClick} title='dadzy click me' />);
    // get the button element
    const buttonElement = screen.getByText('dadzy click me');
    // fire the event
    fireEvent.click(buttonElement);
    // expectation vs reality
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
