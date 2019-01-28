import React, { useState } from 'react';

import { IFormData } from '../../models/form.model';
import Avatar from 'react-md/lib/Avatars/Avatar';
import { DialogContainer, Button, DialogContainerProps } from 'react-md';
import AvatarManager from './AvatarManager';

interface IFile {
  name: string;
  type: string;
  size: number;
  lastModified?: Date;
  uploadResult: string | ArrayBuffer;
}

const INITIAL_FILE: IFile = {
  name: '',
  type: '',
  size: 0,
  lastModified: new Date(),
  uploadResult: ''
};

interface IAvatarUploadProps {
  formData: IFormData;
  updateForm: (update: Partial<IFormData>) => void;
}
const AvatarUpload = ({ avatar, updateForm }) => {

  const [isVisible, setVisible] = useState(false);
  const [editorRef, setEditorRef] = useState({});

  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const updateAvatar = () => {
    hide();
    if (editorRef) {
      // let f = editorRef['getImage']();
    }
  };
  // const dialogRef = React.createRef<React.ComponentClass<DialogContainerProps>>();
  const actions = [{
    id: 'dialog-cancel',
    secondary: true,
    children: 'Cancel',
    onClick: hide,
  }, {
    id: 'dialog-ok',
    primary: true,
    children: 'Save',
    onClick: updateAvatar,
  }];

  return (
    <div>
      <Avatar src={avatar} role="presentation" />
      <Button raised onClick={show}>Select a file</Button>
      <DialogContainer
        id="avatar-manager-dialog"
        visible={isVisible}
        title="Upload your picture"
        onHide={hide}
        actions={actions}
        height="554px"
        width="800px">
        <AvatarManager updateForm={updateForm} setEditorRef={setEditorRef} />
      </DialogContainer>
    </div>
  );
}
export default AvatarUpload;