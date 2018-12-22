import * as React from 'react';
import './App.scss';

import ContentEditable from 'react-contenteditable'
import { DomToImage } from './dom2image/dom2image';

export const App: React.FC<{}> = () => {

  const [mylabel, setMyLabel] = React.useState('Hello image ! (replace me please !!!)');

  const update = (ev: any) => {
    setMyLabel(ev.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
      <h1 className="App-title">Welcome to signgen 2018</h1>
      </header>
      <p className="App-intro">
        more to come!
        </p>
      {/* <img src="/images/signgen_template.png"/> */}
      <div id="domToConvert">
        <h1>      <ContentEditable
          html={mylabel} // innerHTML of the editable div
          disabled={false} // use true to disable edition
          onChange={update} // handle innerHTML change
        /></h1>
        <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMzQzOTkxMDAwMDgxNzA2/jason-statham-attends-the-press-conference-of-director-f-gary-grays-film-the-fate-of-the-furious-on-march-23-2017-in-beijing-china-photo-by-vcg_vcg-via-getty-images-square.jpg" />
      </div>
      <DomToImage elementId="domToConvert" />

    </div>
  );
};

export default App;
