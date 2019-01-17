import * as React from 'react';
import './how-to.scss';

interface IHowToProps{
}

export const HowTo: React.FC<IHowToProps> = ()=>{

  return <div>
    <h2>How to apply ?</h2>
    <ol>
      <li>Click on <b>Copy to clipboard</b> button.</li>
      <li>Go to Office365 or Outlook.com. </li>
      <li>Inthetopright,click <b>Settings>View full settings.</b></li>
      <li>Goto <b>Mail > Compose and reply.</b></li>
      <li>Paste your signature <b>(Ctrl+V or Command+V)</b> <br/>into the <b>"Email signature"</b> section.</li>
      <li>Choose "Compose messages in HTML format" in <br/>the "Message format" section.</li>
      <li>Click "Save" button.</li>
    </ol>
  </div>;
};