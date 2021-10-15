import React from 'react';
import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import InventoryDetail from './InventoryDetail';
import inventoryDetail from '../../../fixtures/inventoryDetail.json';
import LoginProvider from '../../../hooks/LoginProvider';

const server = setupServer(
  rest.get(
    'https://bienventory.herokuapp.com/api/v1/inventory/:id',
    (req, res, ctx) => {
      return res(ctx.json(inventoryDetail));
    }
  )
);

describe('Inventory Detail component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays the inventory on the dashboard', async () => {
    const { container } = render(
      <LoginProvider>
        <MemoryRouter>
          <InventoryDetail />
        </MemoryRouter>
      </LoginProvider>
    );
    
    const h2 = await screen.findByText('butter');
    screen.getByText('Edit');
    screen.getByText('Delete');
    

    expect(h2).not.toBeEmptyDOMElement;
    expect(container).toMatchSnapshot();
  });
});
