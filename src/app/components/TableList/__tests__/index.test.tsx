import React from 'react';
import { render } from '@testing-library/react';

import { TableList } from '..';

describe('<TableList  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<TableList />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
