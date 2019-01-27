import * as React from 'react';
import { SVGIcon } from 'react-md';

const getSVGicon = (url, title) => {
  return <SVGIcon use={url} title={title}/>;
};

export const AttIcon = ()=>{
  return getSVGicon('/images/att-logo.svg', 'AT&T Icon');
};