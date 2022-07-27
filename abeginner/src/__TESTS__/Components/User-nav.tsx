import react from 'react';
import { screen, render } from '@testing-library/react';
import { Sidebar } from '../../layouts/User-nav';

// Demonstration of multiple tests
describe('menu', () => {
  it('renders the menu with props', () => {
    const list = [
      {
        name: 'about',
        href: 'about',
      },
    ];
    // arrange
    render(<Sidebar items={list} />);
    const anchorElement = screen.getAllByRole('navigation');
    // expects
    expect(anchorElement[0]).toHaveTextContent(list[0].name);
    expect(anchorElement[0]).toHaveAttribute('href', list[0].name);
  });
});
