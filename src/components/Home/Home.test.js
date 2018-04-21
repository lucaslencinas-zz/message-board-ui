import React from 'react';
import { MemoryRouter as Router } from 'react-router-dom';
import { expect } from 'chai';
import sinon from 'sinon';
import { shallow, mount } from 'enzyme';
import Home from './Home';

describe('Home', () => {
  let home;
  let onLoadChannels;

  describe('When shallowing', () => {
    beforeEach(() => {
      onLoadChannels = sinon.spy();
      home = shallow((
        <Home
          onLoadChannels={onLoadChannels}
          channels={channels}
        />
      ));
    });

    it('Renders the elements and tags correctly', () => {
      const grid = home.find('Grid');
      expect(grid.prop('channels')).to.equal(channels);
      expect(grid.prop('onLoadChannels')).to.equal(onLoadChannels);
    });
  });

  describe('When mounting with no channels', () => {
    beforeEach(() => {
      onLoadChannels = sinon.spy();
      home = mount(
        <Router>
          <Home
            onLoadChannels={onLoadChannels}
            channels={[]}
          />
        </Router>
      );
    });

    it('Renders the elements and tags correctly', () => {
      const grid = home.find('Grid');
      expect(grid.prop('channels')).to.eql([]);
      expect(grid.prop('onLoadChannels')).to.equal(onLoadChannels);
    });

    it('Calls onLoadChannels to get the channels', () => {
      expect(onLoadChannels.called).to.equal(true);
    });
  });

  describe('When mounting with channels', () => {
    beforeEach(() => {
      onLoadChannels = sinon.spy();
      home = mount(
        <Router>
          <Home
            onLoadChannels={onLoadChannels}
            channels={channels}
          />
        </Router>
      );
    });

    it('No need to call onLoadChannels', () => {
      expect(onLoadChannels.called).to.equal(false);
    });
  });
});

const channels = [
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
