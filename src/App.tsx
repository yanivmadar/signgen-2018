import * as React from 'react';
import  { useState } from 'react';
import './App.scss';

import { DomToImage } from './components/dom2image/dom2image';
import { YourDetails } from './components/YourDetails/your-details';
import { Preview } from './components/Preview/preview';
import { HowTo } from './components/HowTo/how-to';

export const App: React.FC<{}> = () => {

  const [mylabel, setMyLabel] = useState('Hello image ! (replace me please !!!)');

  const update = (ev: any) => {
    setMyLabel(ev.target.value);
  };

  return (
    <div className="App container-fluid text-left">
      <header className="App-header">
      <h1 className="App-title">Email Signature Generator</h1>
      </header>
      <p className="App-intro">
        Create your Email Signature in few minutes!
      </p>
      {/* <img src="/images/signgen_template.png"/> */}
      <div id="domToConvert">
        {/* <h1>      <ContentEditable
          html={mylabel} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={update} // handle innerHTML change
        /></h1> */}
        {/* <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMzQzOTkxMDAwMDgxNzA2/jason-statham-attends-the-press-conference-of-director-f-gary-grays-film-the-fate-of-the-furious-on-march-23-2017-in-beijing-china-photo-by-vcg_vcg-via-getty-images-square.jpg" /> */}
      </div>
      {/* <DomToImage elementId="domToConvert" /> */}
      <div className="row">
      <div className="col">
       <YourDetails/>
      </div>
      <div className="col">
        <Preview/>
      </div>
      <div className="col">
        <HowTo/>
      </div>
      </div>
    </div>
  );
};

export default App;
