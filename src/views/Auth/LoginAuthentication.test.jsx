import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { ProvideAuth } from '../../context/ProvideAuth';
import { UserProvider } from '../../context/UserContext';
import Login from './LoginAuthentication';

it('should render a login page', () => {
  const container = render(
    <MemoryRouter>
      <UserProvider>
        <ProvideAuth>
          <Login />
        </ProvideAuth>
      </UserProvider>
    </MemoryRouter>
  );
  expect(container).toMatchSnapshot();
});
