import React, { Fragment, useEffect, useState } from 'react';
// const { Fragment, useEffect } = React;

import TextField from 'react-md/lib/TextFields/TextField';
import SelectField from 'react-md/lib/SelectFields/SelectField';

import { IFormData, fillData } from '../../models/form.model';
import AvatarUpload from '../AvatarUpload/avatar-upload';

import './your-details.scss';

interface IYourDetailsProps {
  formData: IFormData;
  updateForm: (update: Partial<IFormData>) => void;
}

const YourDetails: React.FC<IYourDetailsProps> = ({
  formData: { first, avatar, email },
  updateForm
}) => {
  const [titleList, setTitleList] = useState([]);
  const [lobList, setLobList] = useState([]);
  const [domainList, setDomainList] = useState([]);

  const onInputChange = event => {
    const { id: name, value } = event.target;

    updateForm({
      [name]: value
    });
  };

  const onSelectChange = (...args: any[]) => {
    const { id: name, value } = args[3];

    updateForm({
      [name]: value
    });
  };

  useEffect(() => {
    fillData('title', setTitleList);
    fillData('lob', setLobList);
    fillData('domain', setDomainList);
  }, []);

  return (
    <Fragment>
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
          menuItems={titleList}
          simplifiedMenu={false}
          sameWidth
          onChange={onSelectChange}
        />
        <SelectField
          id="lob"
          placeholder="Select LOB"
          className="md-cell md-cell--12"
          menuItems={lobList}
          simplifiedMenu={true}
          onChange={onSelectChange}
          sameWidth
        />
        <SelectField
          id="domain"
          placeholder="Select Domain"
          className="md-cell md-cell--12"
          menuItems={domainList}
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
    </Fragment>
  );
};

export default YourDetails;
