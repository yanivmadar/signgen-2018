import *  as React from 'react';
import { Fragment } from 'react';
import './preview.scss';
import { IFormData } from '../../model/form';

interface IPreviewProps{
  formData: IFormData;
}

export const Preview: React.FC<IPreviewProps> = ({formData: {name, title, lob, domain}})=>{

  return <Fragment><h2>Preview</h2>
    <div className="card">
      <div className="card-header">New Mail</div>
      <div className="card-body">
        <address>
        <h5>{name || 'First & Last Name'}</h5>
        <h6>{title || 'Title'} | {lob || 'LOB'},{domain || 'Domain'}</h6>
        <p>
        AT&T Network Applications Development, Tech Dev <br/>
        Tel Aviv | Tampa | Atlanta | New Jersey | Chicago
        </p>
        </address>
      </div>
    </div>
  </Fragment>;
};