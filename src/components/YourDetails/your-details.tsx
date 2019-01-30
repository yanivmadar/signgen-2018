import React, { Fragment, useEffect } from 'react';
// const { Fragment, useEffect } = React;

import TextField from 'react-md/lib/TextFields/TextField';
import SVGIcon from 'react-md/lib/SVGIcons/SVGIcon';
import SelectField from 'react-md/lib/SelectFields/SelectField';
import FontIcon from 'react-md/lib/FontIcons/FontIcon';
import FileInput from 'react-md//lib/FileInputs/FileInput';

import { IFormData, LOB_LIST, DOMAIN_LIST, JOB_TITLE_LIST } from '../../models/form.model';
import { FileUpload } from 'react-md';
import AvatarUpload from '../AvatarUpload/avatar-upload';

import './your-details.scss';

interface IYourDetailsProps {
  formData: IFormData;
  updateForm: (update: Partial<IFormData>) => void;
}

const YourDetails: React.FC<IYourDetailsProps> = ({ formData: { first, avatar, email }, updateForm }) => {
  const onInputChange = (event) => {
    const {id: name, value} = event.target;

    updateForm({
      [name]: value
    });
  }

  const onSelectChange = (...args: any[]) => {
    const { id: name, value } = args[3];

    updateForm({
      [name]: value
    });
  }

  return (<Fragment>
    <form onChange={onInputChange}>
      <legend className="mb-3">Your Details</legend>
      <AvatarUpload avatar={avatar} updateForm={updateForm} />
      <TextField
        id="first"
        label="First Name"
        lineDirection="center"
        className="md-cell md-cell--5"
        defaultValue={first}
        required
      />
      <TextField
        id="last"
        label="Last Name"
        lineDirection="center"
        className="md-cell md-cell--5"
        required
      />
      <SelectField
        id="title"
        placeholder="Select Title"
        className="md-cell md-cell--12"
        menuItems={JOB_TITLE_LIST}
        simplifiedMenu={false}
        sameWidth
        onChange={onSelectChange}
      />
      <SelectField
        id="lob"
        placeholder="Select LOB"
        className="md-cell md-cell--12"
        menuItems={LOB_LIST}
        simplifiedMenu={true}
        onChange={onSelectChange}
        sameWidth
      />
      <SelectField
        id="domain"
        placeholder="Select Domain"
        className="md-cell md-cell--12"
        menuItems={DOMAIN_LIST}
        simplifiedMenu={true}
        onChange={onSelectChange}
        sameWidth
      />
      <TextField
        id="phone"
        label="Phone"
        lineDirection="center"
        className="md-cell md-cell--12"
      />
      <TextField
        id="email"
        label="Email"
        lineDirection="center"
        className="md-cell md-cell--12"
        defaultValue={email}
      />
    </form>
  </Fragment>);
};

export default YourDetails;
