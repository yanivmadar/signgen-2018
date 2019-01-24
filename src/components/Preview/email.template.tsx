import * as React from 'react';
import {Fragment} from 'react';
import { IFormData } from '../../models/form.model';
import { DEMO_AVATAR } from '../../App';

export const emailFromProps = ({ name, last, title, lob, domain, phone, email, avatar }: IFormData) => {
  return (
  <Fragment>
    <table className="att-sign" style={{ letterSpacing:'-0.3px',height: '89px', font: 'normal 11px/16px arial', background: 'white' }}>
    <tr>
      <td style={{ width: '74px', textAlign: 'center'}}>
        <img style={{ border: '1px solid black', borderRadius: '50px', width: '52px', height: '52px' }} src={DEMO_AVATAR} width="52" alt="avatar" />
      </td>
      <td style={{padding: '12px', width: '164px', borderLeft: '1px rgb(209, 209, 209) solid', borderRight: '1px rgba(209, 209, 209) solid'}}>
        <h5 style={{ fontWeight: 'bold', textTransform: 'capitalize', color: '#009fdb', fontSize: '11px'}}>{name || 'john'} {last || 'doe'}</h5>
        <h6>{(title || 'Title') + ((lob || domain) ? ' | ' : '') + (lob || '') + (domain ? ((lob ? ', ' : '') + domain) : '')}<br/>
        AT&T, Technology Development</h6>
        <p>Phone: {phone || '0000000'}</p>
        <p>Email: <span  style={{ textTransform: 'lowercase' }}>{email || [name || 'john', '.', last || 'doe', '@att.com'].join('')}</span></p>
      </td>
      <td></td>
    </tr>
  </table>
  </Fragment>
  );
};