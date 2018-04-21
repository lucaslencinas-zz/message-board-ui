import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Grid from './Grid';

describe('Grid', () => {
  let channels;
  let grid;

  describe('With no channels', () => {
    beforeEach(() => {
      channels = [];
      grid = shallow(<Grid
        channels={channels}
      />);
    });

    it('Renders the grid but without any Card component', () => {
      const gridElement = grid.find('[className="grid"]');
      const cards = grid.find('[className="card-wrapper"]');
      expect(gridElement.exists()).to.equal(true);
      expect(cards.length).to.equal(0);
    });
  });

  describe('With channels', () => {
    beforeEach(() => {
      channels = [
        {
          id: 'c44be829-3d89-4b70-80be-177b7633bc5b',
          name: 'cleaning',
          messages: []
        },
        {
          id: 'c44be829-3d89-4b70-80be-1773763abc5b',
          name: 'shopping',
          messages: []
        },
        {
          id: '1234e829-3d89-4b70-80be-1773763abc5b',
          name: 'bills',
          messages: []
        }
      ];
      grid = shallow(<Grid
        channels={channels}
      />);
    });

    it('Renders the grid with Card components', () => {
      const gridElement = grid.find('[className="grid"]');
      const cards = grid.find('Card');
      expect(gridElement.exists()).to.equal(true);
      expect(cards.length).to.equal(3);
    });
  });
});
