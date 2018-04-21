import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  let channel;
  let card;

  beforeEach(() => {
    channel = {
      id: 'c44be829-3d89-4b70-80be-177b7633bc5b',
      name: 'cleanning',
      messages: []
    };
    card = shallow(<Card channel={channel} />);
  });

  it('Renders the Link with the correct url including the ID', () => {
    const url = card.find('Link').prop('to');
    expect(url).to.equal('/channels/c44be829-3d89-4b70-80be-177b7633bc5b');
  });

  it('Renders the name of the channel', () => {
    const channelName = card.find('div').text();
    expect(channelName).to.equal(channel.name);
  });
});
