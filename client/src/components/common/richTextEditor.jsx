import React from 'react';
import ReactSummernote from 'react-summernote';
import 'react-summernote/dist/react-summernote.css'; // import styles
// import 'react-summernote/lang/summernote-fr-FR'; // you can import any other locale
// Import bootstrap(v3 or v4) dependencies
import 'bootstrap/js/src/modal';
import 'bootstrap/js/src/tooltip';

const RichTextEditor = ({ name, value, onChange }) => {

  return (
    <ReactSummernote
      value={value}
      options={{
        height: 100,
        dialogsInBody: true,
        toolbar: [
          ['style', ['style']],
          ['font', ['bold', 'underline', 'clear']],
          ['fontname', ['fontname']],
          ['para', ['ul', 'ol', 'paragraph']],
        ]
      }}
      onChange={onChange}
    />
  );
}

export default RichTextEditor;