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

export const fillData = async (name: string, update)=>{
  const { data } = await fetch(`/data/${name}.json`).then(data => data.json());
  update(data);
};
