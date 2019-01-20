import * as React from 'react';
import { Fragment, useEffect } from 'react';

import Form, { UiSchema, IChangeEvent } from 'react-jsonschema-form';

import formSchema from './form/schema.json';
import formUiSchema from './form/ui-schema.json';
import { JSONSchema6 } from 'json-schema';
import { IFormData } from '../../models/form.model';

import './your-details.scss';
import { DEFAULT_AVATAR } from '../../App';

interface IYourDetailsProps {
  formData: IFormData;
  updateForm: (event: IChangeEvent<IFormData>) => void;
  updateAvatar: (avatar: string) => void;
  avatar: string;
}

export const YourDetails: React.FC<IYourDetailsProps> = ({ formData, updateForm, avatar, updateAvatar }) => {
  const onImageChange = (event, imageUrl?) => {
    const image = (event.target.files && event.target.files[0]) || imageUrl;
    if (image) {
      updateAvatar(URL.createObjectURL(image));
    }
  };

  useEffect(()=>updateAvatar(DEFAULT_AVATAR), []);

  return <Fragment>
    <input type="file" onChange={onImageChange}/>
    <img className="avatar" src={avatar}/>
    <Form schema={formSchema as JSONSchema6}
      uiSchema={formUiSchema as UiSchema}
      formData={formData}
      onChange={updateForm}
  /></Fragment>;
};
