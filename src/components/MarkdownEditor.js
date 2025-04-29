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
      <h1 className='preview'>{output}</h1>
    </div>
  );
}

export default MarkdownEditor;
