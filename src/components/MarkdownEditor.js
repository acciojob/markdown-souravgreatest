import React, { useEffect, useState } from 'react';
import { marked } from 'marked'; // import marked
import '../styles/styles.css';

const MarkdownEditor = () => {
  const [text, setText] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setOutput(marked.parse(text)); // convert markdown to HTML
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
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
        <div
          className='preview'
          dangerouslySetInnerHTML={{ __html: output }} // Render HTML output
        ></div>
      )}
    </div>
  );
}

export default MarkdownEditor;
