import *  as React from 'react';
import { Fragment } from 'react';
import './preview.scss';

interface IPreviewProps{
}

export const Preview: React.FC<IPreviewProps> = ()=>{

  return <Fragment><h2>Preview</h2>
  <div className="card">preview</div></Fragment>;
};