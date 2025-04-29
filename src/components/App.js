import React, { useEffect, useState } from 'react';
import '../styles/styles.css';
import MarkdownEditor from './MarkdownEditor';

const App = () => {
  return (
    <div className='app'>
        <MarkdownEditor/>
    </div>
  );
}

export default App;
