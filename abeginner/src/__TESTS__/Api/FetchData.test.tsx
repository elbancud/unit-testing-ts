import React from 'react';
import { screen, render, waitFor } from '@testing-library/react';
// MSW
import { setupServer } from 'msw/node';
import { rest } from 'msw';
// Component
import FetchComponent from '../../components/api/FetchComponent';

// Setup server to get and return a result with json
const server = setupServer(
  rest.get('/api', (req, res, ctx) => {
    return res(ctx.json({ name: 'jack' }));
  })
);

// Lifecycle of server upon fetching
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

// Test
describe('api fetch', () => {
  test('gets the data', async () => {
    render(<FetchComponent />);
    const divElement = await screen.findByRole('contentinfo');
    expect(divElement).toHaveTextContent('Name is jack');
  });
});
