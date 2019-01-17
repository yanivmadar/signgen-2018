import domtoimage from 'dom-to-image';
import * as React from 'react';
import './dom2image.scss';

import { saveAs } from 'file-saver';

interface IDom2ImageProps{
  elementId: string;
}
export const DomToImage: React.FC<IDom2ImageProps> = ({elementId})=>{

  const saveImage = (/*ev: MouseEvent<HTMLButtonElement>*/)=>{
    domtoimage.toBlob(document.getElementById(elementId) as Node)
    .then( (blob: any) => {
        saveAs(blob, 'my-node.png');
    });  };
  return <button onClick={saveImage} className="btn btn-primary" type="button">Copy to clipboard</button>
};