import React from 'react';
import { Route } from 'react-router-dom';
import './index.css';
import Navbar from '../components/Navbar';
import Home from '../components/Home';
import ChannelDetail from '../components/ChannelDetail';

const Router = () => (
  <div>
    <Navbar />
    <main>
      <Route
        exact path="/"
        component={Home}
      />
      <Route
        exact path="/channels/:id"
        component={ChannelDetail}
      />
    </main>
  </div>
);

export default Router;
