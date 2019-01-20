export interface IFormData{
  name: string;
  last: string;
  title: string;
  lob: string;
  domain: string;
  phone: string;
  email: string;
}

export const INITIAL_FORM_DATA: IFormData = {
  name: '',
  last: '',
  title: '',
  lob: '',
  domain: '',
  phone: '',
  email: '',
};