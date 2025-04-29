import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const MarkdownEditor = () => {
    const [text,setText]=useState("");
    const [output,setOutput]=useState("");
    useEffect(()=>{
        setOutput(text);
    },[text])
  return (
    <div>
      <textarea className='textarea' onChange={(e)=>setText(e.target.value)}></textarea>
      <span className='preview'>{output}</span>
    </div>
  );
}

export default MarkdownEditor;
