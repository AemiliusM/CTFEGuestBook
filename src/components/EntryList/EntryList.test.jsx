import React from 'react';
import { render } from '@testing-library/react';
import EntryList from './EntryList';
import { EntryProvider } from '../../context/EntryContext';

it('should render an entry list', () => {
  const { container } = render(
    <EntryProvider>
      <EntryList />
    </EntryProvider>
  );
  expect(container).toMatchSnapshot();
});
