import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';
import { VenuesList } from './venues';
import { ProductionsList } from './productions';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="venues" list={VenuesList} />
    <Resource name="productions" list={ProductionsList} />
  </Admin>
);

export default App;
