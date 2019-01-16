import * as React from 'react';

import Form, { UiSchema } from 'react-jsonschema-form';

import './your-details.scss';
import formSchema from './form/schema.json';
import formUiSchema from './form/ui-schema.json';
import { JSONSchema6 } from 'json-schema';

interface IYourDetailsProps {
  // elementId: string;
}
const log = (type: any) => console.log.bind(console, type);

export const YourDetails: React.FC<IYourDetailsProps> = () => {
  return <Form schema={formSchema as JSONSchema6}
    uiSchema={formUiSchema as UiSchema}
    onChange={log('changed')}
    onSubmit={log('submitted')}
    onError={log('errors')} />;
};
