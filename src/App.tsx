import * as React from 'react';
import { useState } from 'react';
import './App.scss';

import { YourDetails } from './components/YourDetails/your-details';
import { Preview } from './components/Preview/preview';
import { HowTo } from './components/HowTo/how-to';
import { IFormData, INITIAL_FORM_DATA } from './models/form.model';
import { IChangeEvent } from 'react-jsonschema-form';
import { emailFromProps } from './components/Preview/email.template';

const FILE_READER = new window['FileReader']();

export const DEFAULT_AVATAR = 'images/att-logo.png';
export const DEMO_AVATAR = 'https://pickaface.net/gallery/avatar/Opi51c74d6edb145.png';

export const App: React.FC<{}> = () => {

  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const updateForm = ({ formData }: IChangeEvent<IFormData>) => {
    if (formData.avatarFile) {
      // formData.avatar = FILE_READER.readAsDataURL(formData.avatarFile);
      formData.avatar = formData.avatarFile;
    }
    setFormData(formData);
    setCopied(false);
  };


  return (
    <div className="container-fluid text-left p-0">
      <nav className="navbar navbar-dark bg-dark">
      <a href="#"><h3 className="mb-0 att">Email Signature Generator</h3></a>
      <a href="#"><h3 className="mb-0 float-right pop"><b>People</b> for <b>People</b></h3></a>
      </nav>
      <h1 className="head bg-white">
        Create your Email Signature in few minutes!
      </h1>
      <div className="row p-4">
        <div className="col">
          <YourDetails formData={formData} updateForm={updateForm} />
        </div>
        <div className="col preview">
          <Preview formData={formData} />
        </div>
        <div className="col">
          <HowTo />
        </div>
      </div>
    </div>
  );
};

export default App;
