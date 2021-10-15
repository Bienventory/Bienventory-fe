import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import Dashboard from './Dashboard';
import inventory from '../../fixtures/inventory.json';
import LoginProvider from '../../hooks/LoginProvider';

const server = setupServer(
  rest.get(
    'https://bienventory.herokuapp.com/api/v1/inventory/',
    (req, res, ctx) => {
      return res(ctx.json(inventory));
    }
  )
);

describe('Dashboard Component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it.skip('displays the inventory on the dashboard', async () => {
    const { container } = render(
      <LoginProvider>
        <MemoryRouter>
          <Dashboard />
        </MemoryRouter>
      </LoginProvider>
    );

    const inventoryGrid = await screen.findAllByRole('row');

    expect(inventoryGrid).not.toBeEmptyDOMElement;
    expect(container).toMatchSnapshot();
  });
});
