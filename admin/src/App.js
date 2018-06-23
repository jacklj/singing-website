import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';
import { VenuesList } from './venues';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="venues" list={VenuesList} />
  </Admin>
);

export default App;
