// in src/posts.js
import React from 'react';
import { List, Datagrid, TextField } from 'react-admin';

export const ProductionsList = (props) => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="company" />
            <TextField source="url" />
            <TextField source="copy" />
            <TextField source="my_role" />
        </Datagrid>
    </List>
);
