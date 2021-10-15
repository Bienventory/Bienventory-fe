import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import InventoryForm from './InventoryForm';
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

describe('Inventory Form component', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays the inventory form component', async () => {
    const { container } = render(
      <LoginProvider>
        <MemoryRouter>
          <InventoryForm />
        </MemoryRouter>
      </LoginProvider>
    );

    screen.getByLabelText('Item Name');
    screen.getByLabelText('Description');
    screen.getByLabelText('Quantity On Hand');
    screen.getByLabelText('Unit Type');

    expect(container).toMatchSnapshot();
  });
});
