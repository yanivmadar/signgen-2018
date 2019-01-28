export interface IFormData{
  avatarFile?: string;
  avatar: string;
  first: string;
  last: string;
  title: string;
  lob: string;
  domain: string;
  phone: string;
  email: string;
}

export const INITIAL_FORM_DATA: IFormData = {
  avatar: '',
  first: '',
  last: '',
  title: '',
  lob: '',
  domain: '',
  phone: '',
  email: '',
};

export const JOB_TITLE_LIST = ['Job Title', 'Zero', 'One', 'Two'];
export const LOB_LIST = ['LOB', 'Zero', 'One', 'Two'];
export const DOMAIN_LIST = ['Domain one', 'Zero', 'One', 'Two'];
