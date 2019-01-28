import * as React from 'react';
import { useState } from 'react';
import './App.scss';

import YourDetails from './components/YourDetails/your-details';
import Preview from './components/Preview/preview';
import HowTo from './components/HowTo/how-to';
import { IFormData, INITIAL_FORM_DATA } from './models/form.model';
import { Cell, Grid, Toolbar } from 'react-md';

const FILE_READER = new window['FileReader']();

export const DEFAULT_AVATAR = 'images/att-logo.png';

export const App: React.FC<{}> = () => {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  const updateForm = (update: Partial<IFormData>) => {
    if (update.avatarFile) {
      // formData.avatar = FILE_READER.readAsDataURL(formData.avatarFile);
      update.avatar = update.avatarFile;
    }
    setFormData({...formData, ...update});
  };

  return (
    <div className="container-fluid text-left p-0">
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
      <Toolbar>
        <a href="#"><h3 className="mb-0 att">Email Signature Generator</h3></a>
        <a href="#"><h3 className="mb-0 float-right pop"><b>People</b> for <b>People</b></h3></a>
      </Toolbar>
      <Grid>
        <Cell size={3}>
          <YourDetails formData={formData} updateForm={updateForm} />
        </Cell>
        <Cell size={6} className="preview">
          <Preview formData={formData} />
        </Cell>
        <Cell size={3}>
          <HowTo />
        </Cell>
      </Grid>
    </div>
  );
};

export default App;
