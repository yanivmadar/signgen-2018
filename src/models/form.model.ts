export interface IFormData{
  avatarFile?: string;
  avatar: string;
  name: string;
  last: string;
  title: string;
  lob: string;
  domain: string;
  phone: string;
  email: string;
}

export const INITIAL_FORM_DATA: IFormData = {
  avatar: '',
  name: '',
  last: '',
  title: '',
  lob: '',
  domain: '',
  phone: '',
  email: '',
};

export const STRING_ITEMS = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten'];
