import React from 'react';
import { List, Datagrid, TextField, ReferenceField } from 'react-admin';

export const ShowsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="start" />
            <TextField source="end" />
            <ReferenceField label="Production" source="production_id" reference="productions">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Venue" source="venue_id" reference="venues">
                <TextField source="venue_name" />
            </ReferenceField>
          </Datagrid>
    </List>
);
