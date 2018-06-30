import React from 'react';
import {
  List,
  Datagrid,
  DateField,
  TextField,
  ReferenceField,
  ReferenceInput,
  SelectInput,
  Edit,
  SimpleForm,
  DisabledInput,
  Create,
  EditButton,
} from 'react-admin';
import { DateTimeInput } from 'react-admin-date-inputs';

export const ShowsList = props => (
  <List {...props}>
    <Datagrid>
      <TextField source="id" />
      <DateField source="start" showTime />
      <DateField source="end" showTime />
      <ReferenceField
        label="Production"
        source="production_id"
        reference="productions"
      >
        <TextField source="name" />
      </ReferenceField>
      <ReferenceField label="Venue" source="venue_id" reference="venues">
        <TextField source="venue_name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

const ShowTitle = ({ record }) => {
  return <span>Show {record ? `"${record.start}"` : ''}</span>;
};

export const ShowEdit = props => (
  <Edit title={<ShowTitle />} {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <DateTimeInput
        source="start"
        label="Start time"
        options={{
          format: 'DD/MM/YYYY, HH:mm:ss',
          ampm: false,
          clearable: true,
        }}
      />
      <DateTimeInput
        source="end"
        label="End time"
        options={{
          format: 'DD/MM/YYYY, HH:mm:ss',
          ampm: false,
          clearable: true,
        }}
      />
      <ReferenceInput
        label="Production"
        source="production_id"
        reference="productions"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Venue" source="venue_id" reference="venues">
        <SelectInput optionText="venue_name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

export const ShowCreate = props => (
  <Create {...props}>
    <SimpleForm>
      <DateTimeInput
        source="start"
        label="Start time"
        options={{
          format: 'DD/MM/YYYY, HH:mm:ss',
          ampm: false,
          clearable: true,
        }}
      />
      <DateTimeInput
        source="end"
        label="End time"
        options={{
          format: 'DD/MM/YYYY, HH:mm:ss',
          ampm: false,
          clearable: true,
        }}
      />
      <ReferenceInput
        label="Production"
        source="production_id"
        reference="productions"
      >
        <SelectInput optionText="name" />
      </ReferenceInput>
      <ReferenceInput label="Venue" source="venue_id" reference="venues">
        <SelectInput optionText="venue_name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
