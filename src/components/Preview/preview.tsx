import *  as React from 'react';
import { Fragment } from 'react';
import './preview.scss';
import { IFormData } from '../../models/form.model';
import { DomToImage } from '../dom2image/dom2image';

interface IPreviewProps{
  formData: IFormData;
}

export const Preview: React.FC<IPreviewProps> = ({formData: {name, title, lob, domain, phone, email}})=>{

  return <Fragment><legend>Preview</legend>
    <div className="card shadow-sm mb-5 bg-white rounded">
      <div className="card-header">New Mail</div>
      <div className="card-body">
        <address id="domToConvert">
          <h5>{name || 'First & Last Name'}</h5>
          <h6>{title || 'Title'} | {lob || 'LOB'},{domain || 'Domain'}</h6>
          <p>
          AT&T Network Applications Development, Tech Dev <br/>
          Tel Aviv | Tampa | Atlanta | New Jersey | Chicago
          </p>
          <h6>Mobile: {phone || '0000000'}</h6>
          <h6>Email: {email || 'a@jkhk.com'}</h6>
        </address>
      </div>
    </div>
    <DomToImage elementId="domToConvert" />
  </Fragment>;
};