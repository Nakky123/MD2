import { useState } from "react";
import { EditorState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const UncontrolledEditor = () => {
  const [contentState, setContentState] = useState({});

  const onContentStateChange = (contentState) => {
    setContentState(contentState);
  };

  return (
    <Editor
      initialContentState={contentState}
      wrapperClassName="demo-wrapper"
      editorClassName="demo-editor"
      onContentStateChange={onContentStateChange}
    />
  );
};

export default UncontrolledEditor;
