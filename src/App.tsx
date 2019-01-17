import * as React from 'react';
import  { useState } from 'react';
import './App.scss';

import { DomToImage } from './components/dom2image/dom2image';
import { YourDetails } from './components/YourDetails/your-details';
import { Preview } from './components/Preview/preview';
import { HowTo } from './components/HowTo/how-to';
import { IFormData, INITIAL_FORM_DATA } from './model/form';
import { IChangeEvent } from 'react-jsonschema-form';

export const App: React.FC<{}> = () => {

  const [mylabel, setMyLabel] = useState('Hello image ! (replace me please !!!)');

  const update = (ev: any) => {
    setMyLabel(ev.target.value);
  };

  const [formData, setFormData] = useState<IFormData>(INITIAL_FORM_DATA);

  const updateForm = ({formData}: IChangeEvent<IFormData>)=>setFormData(formData);

  return (
    <div className="container-fluid text-left">
      <h4 className="">Email Signature Generator</h4>
      <h3>
        Create your Email Signature in few minutes!
      </h3>
      {/* <img src="/images/signgen_template.png"/> */}
      {/* <div id="domToConvert">
        <h1>      <ContentEditable
          html={mylabel} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={update} // handle innerHTML change
        /></h1>
        <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMzQzOTkxMDAwMDgxNzA2/jason-statham-attends-the-press-conference-of-director-f-gary-grays-film-the-fate-of-the-furious-on-march-23-2017-in-beijing-china-photo-by-vcg_vcg-via-getty-images-square.jpg" />
      </div> */}
      {/* <DomToImage elementId="domToConvert" /> */}
      <div className="row">
      <div className="col">
       <YourDetails formData={formData} updateForm={updateForm}/>
      </div>
      <div className="col preview">
        <Preview formData={formData}/>
      </div>
      <div className="col">
        <HowTo/>
      </div>
      </div>
    </div>
  );
};

export default App;
