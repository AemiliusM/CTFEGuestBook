import React from 'react';
import { render } from '@testing-library/react';
import Entry from './Entry';

it('should render an entry', () => {
  const { container } = render(
    <Entry entry={{ name: 'billy', message: 'hello' }} />
  );
  expect(container).toMatchSnapshot();
});
