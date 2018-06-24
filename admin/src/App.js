import React from 'react';
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import dataProvider from './dataProvider';
import { VenuesList, VenueEdit, VenueCreate } from './venues';
import { ProductionsList, ProductionEdit, ProductionCreate } from './productions';
import { ShowsList, ShowEdit, ShowCreate } from './shows';

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="venues" list={VenuesList} edit={VenueEdit} create={VenueCreate} />
    <Resource name="productions" list={ProductionsList} edit={ProductionEdit} create={ProductionCreate} />
    <Resource name="shows" list={ShowsList} edit={ShowEdit} create={ShowCreate} />
  </Admin>
);

export default App;
