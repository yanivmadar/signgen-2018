import * as React from 'react';
import { Fragment, useEffect } from 'react';

import { TextField, SelectField, SVGIcon, Avatar } from 'react-md';

import { IFormData, STRING_ITEMS } from '../../models/form.model';

import './your-details.scss';

const icon = <SVGIcon use={'images/arrowDown.svg'} />;

interface IYourDetailsProps {
  formData: IFormData;
  updateForm: (event) => void;
}

export const YourDetails: React.FC<IYourDetailsProps> = ({ formData, updateForm }) => {

  return (<Fragment>
    <legend className="mb-3">Your Details</legend>
    <Avatar src={formData.avatar} role="presentation" />
    <div className="md-grid">
      <div className="md-grid">
        <TextField
          id="floating-center-title"
          label="First Name"
          lineDirection="center"
          className="md-cell md-cell--6"
        />
        <TextField
          id="floating-center-title"
          label="Last Name"
          lineDirection="center"
          className="md-cell md-cell--6"
        />
        <SelectField
          id="select-field-8"
          placeholder="Select Title"
          className="md-cell md-cell--12"
          menuItems={STRING_ITEMS}
          position={SelectField.Positions.BELOW}
          dropdownIcon={icon}
          simplifiedMenu={true}
        />
        <SelectField
          id="select-field-8"
          placeholder="Select LOB"
          className="md-cell md-cell--12"
          menuItems={STRING_ITEMS}
          position={SelectField.Positions.BELOW}
          dropdownIcon={icon}
          simplifiedMenu={true}
        />
                <SelectField
          id="select-field-8"
          placeholder="Select Domain"
          className="md-cell md-cell--12"
          menuItems={STRING_ITEMS}
          position={SelectField.Positions.BELOW}
          dropdownIcon={icon}
          simplifiedMenu={true}
        />
                <TextField
          id="floating-center-title"
          label="Phone"
          lineDirection="center"
          className="md-cell md-cell--12"
        />
                       <TextField
          id="floating-center-title"
          label="Email"
          lineDirection="center"
          className="md-cell md-cell--12"
        />
      </div>

    </div>
  </Fragment>);
};
