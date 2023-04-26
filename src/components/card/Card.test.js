import React from 'react';
import renderer from 'react-test-renderer';

import Card from './Card';

describe('<Card />', () => {
  it('has 1 child', () => {
    const tree = renderer.create(<Card />).toJSON();
    expect(tree.children.length).toBe(1);
  });
});