import * as React from 'react';
import { useState } from 'react';
import './App.scss';

import { YourDetails } from './components/YourDetails/your-details';
import { Preview } from './components/Preview/preview';
import { HowTo } from './components/HowTo/how-to';
import { IFormData, INITIAL_FORM_DATA } from './models/form.model';
import { IChangeEvent } from 'react-jsonschema-form';
import CopyToClipboard from 'react-copy-html-to-clipboard';
import { renderEmail } from 'react-html-email'

import { emailFromProps } from './components/Preview/email.template';

export const DEFAULT_AVATAR = 'images/att-logo.png';

export const App: React.FC<{}> = () => {

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [avatar, setAvatar] = useState('');

  const updateForm = ({ formData }: IChangeEvent<IFormData>) => setFormData(formData);

  const copy = ()=> {
    console.log(renderEmail(emailFromProps(formData, avatar)));
    renderEmail(emailFromProps(formData, avatar));};

  return (
    <div className="container-fluid text-left">
      <h4 className="">Email Signature Generator</h4>
      <h3>
        Create your Email Signature in few minutes!
      </h3>
      <div className="row">
        <div className="col">
          <YourDetails formData={formData} updateForm={updateForm} avatar={avatar} updateAvatar={setAvatar} />
        </div>
        <div className="col preview">
          <Preview formData={formData} avatar={avatar}/>
        </div>
        <div className="col">
          <HowTo />
        </div>
      </div>
      <CopyToClipboard text={ copy }
        options={{ asHtml: true }}
        onCopy={(text, result) => setCopied(result)}>
        <button>Copy to clipboard</button>
      </CopyToClipboard>
      <h3 style={{ visibility: copied ? 'visible' : 'hidden' }}>Copied To Clipboard !</h3>
    </div>
  );
};

export default App;
