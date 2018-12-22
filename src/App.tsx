import * as React from 'react';
import './App.scss';

import { DomToImage } from './dom2image/dom2image';
import logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to signgen 2018</h1>
        </header>
        <p className="App-intro">
         more to come!
        </p>
        {/* <img src="/images/signgen_template.png"/> */}
        <div id="domToConvert">
          <h1>hello image</h1>
          <img src="https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTUzMzQzOTkxMDAwMDgxNzA2/jason-statham-attends-the-press-conference-of-director-f-gary-grays-film-the-fate-of-the-furious-on-march-23-2017-in-beijing-china-photo-by-vcg_vcg-via-getty-images-square.jpg"/>
        </div>
        <DomToImage elementId="domToConvert"/>
      </div>
    );
  }
}

export default App;
