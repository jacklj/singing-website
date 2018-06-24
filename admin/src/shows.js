import React from 'react';
import { List, Datagrid, DateField, TextField, ReferenceField } from 'react-admin';

export const ShowsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <DateField source="start" showTime />
            <DateField source="end" showTime />
            <ReferenceField label="Production" source="production_id" reference="productions">
                <TextField source="name" />
            </ReferenceField>
            <ReferenceField label="Venue" source="venue_id" reference="venues">
                <TextField source="venue_name" />
            </ReferenceField>
          </Datagrid>
    </List>
);
