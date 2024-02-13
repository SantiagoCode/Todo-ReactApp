import { useState } from 'react';
import Editor from 'react-simple-wysiwyg';

const RichInput = () => {
  const [text, setText] = useState('');
  
  const handleChange = (e) => {
    setText(e.target.value);

    console.log('text', text)
  }

  return (
    <>
      <input type="hidden" name="description" id="description" value={text} />
      <Editor value={text} onChange={handleChange} />
    </>
  );
}

export default RichInput