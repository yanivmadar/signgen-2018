import *  as React from 'react';
import { Fragment, useState } from 'react';
import './preview.scss';
import { IFormData } from '../../models/form.model';
import { emailFromProps } from './email.template';
import CopyToClipboard from 'react-copy-html-to-clipboard';
import { renderEmail } from 'react-html-email'

interface IPreviewProps{
  formData: IFormData;
  // update: (email: string)=>void;
}

export const Preview: React.FC<IPreviewProps> = ({formData})=>{
  const [clipboardText, setClipboardText] = useState('');

  const updateText = () => {
    console.log(renderEmail(emailFromProps(formData)));
    setClipboardText(renderEmail(emailFromProps(formData)));
  };

  return <Fragment><legend className="mb-3">Preview</legend>
    <div className="card shadow-sm bg-white rounded border-0 pb-5 mb-3">
      <div className="card-header font-weight-bold">New Email</div>
      <div className="card-body">

      </div>
      {emailFromProps(formData)}
    </div>
    <CopyToClipboard text={clipboardText}
        options={{ asHtml: true }}
        onCopy={(text, result) => { console.log(`on copied: ${result}`, text)}}>
        <button className="copy btn btn-primary float-right" onMouseDown={updateText}>Copy to clipboard</button>
    </CopyToClipboard>
      {/* <h3 style={{ visibility: copied ? 'visible' : 'hidden' }}>Copied To Clipboard !</h3> */}
  </Fragment>;
};