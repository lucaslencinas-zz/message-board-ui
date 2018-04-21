import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('Navbar', () => {
  it('Displays the icon and text correctly', () => {
    const navbar = shallow(<Navbar />);
    const navbarText = navbar.find('[className="navbar-text"]').text();

    expect(navbarText).to.equal('Message Board');
  });
});
