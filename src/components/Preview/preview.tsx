import *  as React from 'react';
import { Fragment, useState } from 'react';
import './preview.scss';
import { IFormData } from '../../models/form.model';
import { emailFromProps } from './email.template';
import CopyToClipboard from 'react-copy-html-to-clipboard';
import { renderEmail } from 'react-html-email'
import { Button, Card, CardText,CardTitle } from 'react-md';

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

  return <Fragment>
    <legend className="mb-3">Preview</legend>
      {/* <h3 style={{ visibility: copied ? 'visible' : 'hidden' }}>Copied To Clipboard !</h3> */}
      <Card className="md-block-centered">
      <CardTitle title="New Email"/>
      <CardText>
      <p>
        The <code>CardText</code> component is really just useful for displaying any
        content with some additional padding.
      </p>
    </CardText>
      {emailFromProps(formData)}
  </Card>
    <CopyToClipboard text={clipboardText}
        options={{ asHtml: true }}
        onCopy={(text, result) => { console.log(`on copied: ${result}`, text)}}>
        {/* <button className="copy btn btn-primary float-right">Copy to clipboard</button> */}
        <Button className="float-right" flat primary swapTheming onMouseDown={updateText}>Copy to clipboard</Button>
    </CopyToClipboard>
  </Fragment>;
};