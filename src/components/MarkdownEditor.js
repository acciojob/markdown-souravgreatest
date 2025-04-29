import React, { useEffect, useState } from 'react';
import { marked } from 'marked';
import '../styles/styles.css';

const MarkdownEditor = () => {
    const [text, setText] = useState('');
    const [output, setOutput] = useState('');

    useEffect(() => {
        setOutput(marked.parse(text));
    }, [text]);

    return (
        <div>
            <textarea
                className='textarea'
                onChange={(e) => setText(e.target.value)}
                value={text}
            />
            <div
                className='preview'
                dangerouslySetInnerHTML={{ __html: output }}
            />
        </div>
    );
};

export default MarkdownEditor;
