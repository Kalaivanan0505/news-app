import React from 'react';
import renderer from 'react-test-renderer';

import Header from './Header';

describe('<Header />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Header />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});