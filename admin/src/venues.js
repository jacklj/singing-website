// in src/posts.js
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  UrlField,
  EditButton,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  Create,
} from 'react-admin';

export const VenuesList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="venue_name" />
      <TextField source="venue_address" />
      <UrlField source="venue_website" />
      <EditButton />
    </Datagrid>
  </List>
);

const VenueTitle = ({ record }) => {
  return <span>Venue {record ? `"${record.venue_name}"` : ''}</span>;
};

export const VenueEdit = props => (
  <Edit title={<VenueTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="venue_name" />
      <TextInput source="venue_address" />
      <TextInput source="venue_website" />
    </SimpleForm>
  </Edit>
);

export const VenueCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="venue_name" />
      <TextInput source="venue_address" />
      <TextInput source="venue_website" />
    </SimpleForm>
  </Create>
);
