import * as React from 'react';
import {Fragment} from 'react';
import { IFormData } from '../../models/form.model';
import ReactDOMServer from 'react-dom/server'

interface IEmailSignaturePreviewProps{
  formData: IFormData;
}
export const EmailSignaturePreview: React.FC<IEmailSignaturePreviewProps> = ({formData:{ first , last, title, lob, domain, phone, email, avatar }}) => {

  // avatar = 'https://cdn.shopifycloud.com/hatchful-web/assets/2adcef6c1f7ab8a256ebdeba7fceb19f.png';
  return (
  <Fragment>
    <table className="att-sign" style={{ letterSpacing:'-0.3px',height: '89px', font: 'normal 11px/16px arial', background: 'white' }}><tbody><tr>{avatar?(<td style={{ width: '74px', textAlign: 'center', borderRight: '1px rgb(209, 209, 209) solid'}}>
        <img style={{ border: '1px solid black', borderRadius: '50px', width: '52px', height: '52px' }} src={avatar} width="52" alt="avatar" />
      </td>):''}<td style={{padding: '12px', width: '164px', borderRight: '1px rgba(209, 209, 209) solid'}}>
        <h5 style={{ fontWeight: 'bold', textTransform: 'capitalize', color: '#009fdb', fontSize: '11px'}}>{first || 'john'} {last || 'doe'}</h5>
        <h6>{(title || 'Title') + ((lob || domain) ? ' | ' : '') + (lob || '') + (domain ? ((lob ? ', ' : '') + domain) : '')}<br/>
        AT&T, Technology Development</h6>
        <p>Phone: {phone || '0000000'}</p>
        <p>Email: <span  style={{ textTransform: 'lowercase' }}>{email || [first || 'john', '.', last || 'doe', '@att.com'].join('')}</span></p>
      </td>
      <td></td>
    </tr>
    </tbody>
  </table>
  </Fragment>
  );
};

export const renderEmailSignature = (formData: IFormData) =>{
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
  <html><head><title>Email Signature</title>
  <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
  </head>
  <body>${ReactDOMServer.renderToStaticMarkup(<EmailSignaturePreview formData={formData}/>)}</body></html`;
}