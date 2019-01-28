import React, { Fragment, useState } from 'react';
import './preview.scss';
import { IFormData } from '../../models/form.model';
import { EmailSignaturePreview, renderEmailSignature } from './email-signature-preview';
import CopyToClipboard from 'react-copy-html-to-clipboard';
import { renderEmail } from 'react-html-email'
import { Button, Card, CardText,CardTitle } from 'react-md';

interface IPreviewProps{
  formData: IFormData;
  // update: (email: string)=>void;
}

const Preview: React.FC<IPreviewProps> = ({formData})=>{
  const [clipboardText, setClipboardText] = useState('');

  const updateText = () => {
    console.log(renderEmailSignature(formData));
    setClipboardText(renderEmailSignature(formData));
  };

  return <Fragment>
    <legend className="mb-3">Preview</legend>
      {/* <h3 style={{ visibility: copied ? 'visible' : 'hidden' }}>Copied To Clipboard !</h3> */}
      <Card className="md-block-centered">
      <CardTitle title="New Email"/>
      <CardText>
      <p>
        Some email-like preview
      </p>
    </CardText>
      {<EmailSignaturePreview formData={formData}/>}
  </Card>
    <CopyToClipboard text={clipboardText}
        options={{ asHtml: true }}
        onCopy={(text, result) => { console.log(`on copied: ${result}`, text)}}>
        {/* <button className="copy btn btn-primary float-right">Copy to clipboard</button> */}
        <Button className="float-right mt-3" flat primary swapTheming onMouseDown={updateText}>Copy to clipboard</Button>
    </CopyToClipboard>
  </Fragment>;
};

export default Preview;