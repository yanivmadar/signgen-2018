import *  as React from 'react';
import { Fragment } from 'react';
import './preview.scss';
import { IFormData } from '../../models/form.model';
import { emailFromProps } from './email.template';

interface IPreviewProps{
  formData: IFormData;
  avatar: string;
  // update: (email: string)=>void;
}

export const Preview: React.FC<IPreviewProps> = ({formData, avatar})=>{

  return <Fragment><legend>Preview</legend>
    <div className="card shadow-sm mb-5 bg-white rounded">
      <div className="card-header">New Mail</div>
      <div className="card-body">
        {/* <address>
          <h5 style={{textTransform: 'capitalize'}}>{name || 'john'} {last || 'doe'}</h5>
          <h6>{(title || 'Title') + ((lob || domain)?' | ':'')+(lob || '')+(domain?((lob?', ':'')+domain):'')}</h6>
          <p>AT&T, Technology Development</p>
          <h6>Mobile: {phone || '0000000'}</h6>
          <h6 style={{textTransform: 'lowercase'}}>Email: {email || [name || 'john','.',last || 'doe','@att.com'].join('')}</h6>
        </address> */}
      </div>
      {emailFromProps(formData,avatar)}
    </div>
  </Fragment>;
};