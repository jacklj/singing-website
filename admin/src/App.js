import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';
import { VenuesList, VenueEdit, VenueCreate } from './venues';
import { ProductionsList } from './productions';
import { ShowsList } from './shows';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="venues" list={VenuesList} edit={VenueEdit} create={VenueCreate} />
    <Resource name="productions" list={ProductionsList} />
    <Resource name="shows" list={ShowsList} />
  </Admin>
);

export default App;
