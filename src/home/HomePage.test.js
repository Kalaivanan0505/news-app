import React from 'react';
import renderer from 'react-test-renderer';

import HomePage from './HomePage';

describe('<HomePage />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});