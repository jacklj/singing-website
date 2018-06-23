import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';
import { VenuesList } from './venues';
import { ProductionsList } from './productions';
import { ShowsList } from './shows';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="venues" list={VenuesList} />
    <Resource name="productions" list={ProductionsList} />
    <Resource name="shows" list={ShowsList} />
  </Admin>
);

export default App;
