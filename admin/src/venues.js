// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const VenuesList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="venue_name" />
            <TextField source="venue_address" />
            <TextField source="venue_website" />
        </Datagrid>
    </List>
);
