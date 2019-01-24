import * as React from 'react';
import { Fragment, useEffect } from 'react';

import Form, { UiSchema, IChangeEvent } from 'react-jsonschema-form';

import formSchema from './form/schema.json';
import formUiSchema from './form/ui-schema.json';
import { JSONSchema6 } from 'json-schema';
import { IFormData } from '../../models/form.model';

import './your-details.scss';

interface IYourDetailsProps {
  formData: IFormData;
  updateForm: (event: IChangeEvent<IFormData>) => void;
}

export const YourDetails: React.FC<IYourDetailsProps> = ({ formData, updateForm }) => {

  return <Fragment>
    <img className="avatar" src={formData.avatar}/>
    <Form schema={formSchema as JSONSchema6}
      uiSchema={formUiSchema as UiSchema}
      formData={formData}
      onChange={updateForm}/>
    </Fragment>;
};
