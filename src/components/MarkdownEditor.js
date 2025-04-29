import React, { useEffect, useState } from 'react';
import '../styles/styles.css';

const MarkdownEditor = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setOutput(text);
      setLoading(false);
    }, 0);

    return () => clearTimeout(timer); // Cleanup on re-render
  }, [text]);

  return (
    <div>
      <textarea
        className='textarea'
        onChange={(e) => setText(e.target.value)}
        value={text}
      ></textarea>
      {loading ? (
        <h1 className='loading'>loading...</h1>
      ) : (
        <h1 className='preview'>{output}</h1>
      )}
    </div>
  );
}

export default MarkdownEditor;
