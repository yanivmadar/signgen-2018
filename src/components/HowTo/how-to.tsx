import * as React from 'react';
import './how-to.scss';

interface IHowToProps{
}

const HowTo: React.FC<IHowToProps> = ()=>{

  return <div className="how-to">
    <legend className="mb-3">How to apply ?</legend>
    <ol>
      <li>Click on <b>Copy to clipboard</b> button.</li>
      <li>Go to Office365 or Outlook.com.</li>
      <li>Inthetopright,click <b>Settings > View full settings.</b></li>
      <li>Goto <b>Mail > Compose and reply.</b></li>
      <li>Paste your signature <b>(Ctrl+V or Command+V)</b> <br/>into the <b>"Email signature"</b> section.</li>
      <li>Choose "Compose messages in HTML format" in <br/>the "Message format" section.</li>
      <li>Click "Save" button.</li>
    </ol>
  </div>;
};

export default HowTo;