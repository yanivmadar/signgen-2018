import * as React from 'react';
import { Email, Item, Span, Image, Box } from 'react-html-email'

const css = `
  body{background: white;}
}`.trim();

export const emailFromProps = ({ name, last, title, lob, domain }, avatar) => {

  return (
    <Email title="Test Email" headCSS={css}>
      <Item>
        <Span fontSize={15} style={{ textTransform: 'capitalize' }}>{name || 'john'} {last || 'doe'}</Span>
      </Item>
      <Item>
        <Span fontSize={15} textTransform={'capitalize'}>{(title || 'Title') + ((lob || domain) ? ' | ' : '') + (lob || '') + (domain ? ((lob ? ', ' : '') + domain) : '')}</Span>
      </Item>
      <Item>
        <Box cellSpacing={20} width="100%" style={{ borderTop: '3px solid black' }}>
          <Item>
            <Image src={avatar} width={50} height={50} alt="avatar" />
          </Item>
        </Box>
      </Item>
    </Email>
  );
};

/* <address>
          <h5 style={{textTransform: 'capitalize'}}>{name || 'john'} {last || 'doe'}</h5>
          <h6>{(title || 'Title') + ((lob || domain)?' | ':'')+(lob || '')+(domain?((lob?', ':'')+domain):'')}</h6>
          <p>AT&T, Technology Development</p>
          <h6>Mobile: {phone || '0000000'}</h6>
          <h6 style={{textTransform: 'lowercase'}}>Email: {email || [name || 'john','.',last || 'doe','@att.com'].join('')}</h6>
        </address> */