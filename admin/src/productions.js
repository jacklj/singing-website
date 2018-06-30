``; // in src/posts.js
import React from 'react';
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
  LongTextInput,
  Create,
  EditButton,
} from 'react-admin';

export const ProductionsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="company" />
      <TextField source="url" />
      <TextField source="copy" />
      <TextField source="my_role" />
      <EditButton />
    </Datagrid>
  </List>
);

const ProductionTitle = ({ record }) => {
  return <span>Production {record ? `"${record.name}"` : ''}</span>;
};

export const ProductionEdit = props => (
  <Edit title={<ProductionTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
      <TextInput source="company" />
      <TextInput source="url" />
      <LongTextInput source="copy" />
      <TextInput source="my_role" />
    </SimpleForm>
  </Edit>
);

export const ProductionCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="name" />
      <TextInput source="company" />
      <TextInput source="url" />
      <LongTextInput source="copy" />
      <TextInput source="my_role" />
    </SimpleForm>
  </Create>
);
