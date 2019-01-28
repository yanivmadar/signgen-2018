import React, { useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { FileUpload } from 'react-md/lib/FileInputs';
import { IFormData } from '../../models/form.model';

interface IAvatarManagerProps{
  updateForm: (update: Partial<IFormData>) => void;
  setEditorRef: (ref) => void;
}

const AvatarManager: React.FC<IAvatarManagerProps> = ({ updateForm, setEditorRef }) => {
  const [avatar, setAvatar] = useState('');

  const _onLoad = (file, uploadResult) => {
    // const { name, size, type, lastModifiedDate } = file;

    // const newFile = {
    //   name,
    //   type,
    //   size,
    //   lastModified: new Date(lastModifiedDate),
    //   uploadResult,
    // };

    // updateForm({ avatar: uploadResult });
    setAvatar(uploadResult);
  };

  const _setFile = (file) => {
    // debugger;
  };
  const _onChange = (file) => {
    // debugger;
  };
let avatarEditor;
  // const   setRef = (editor) => setEditorRef(editor);

  return (
    <div>
      <FileUpload
        id="avatar_upload"
        secondary
        label="Select files to upload"
        onLoadStart={_setFile}
        onLoad={_onLoad}
        onChange={_onChange}
      />
      <AvatarEditor
        image={avatar}
        width={800}
        height={550}
        border={50}
        color={[255, 255, 255, 0.6]} // RGBA
        scale={1.2}
        rotate={0}
        // ref = {setRef}

      />
    </div>
  )
};

export default AvatarManager;