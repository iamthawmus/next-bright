'use client';
import React from 'react';

function RevealableSection({children}) {
  const [
    snippetShown,
    setSnippetShown,
  ] = React.useState(false);

  if(snippetShown){
    return (
      children
    );
  }

  return (      
    <div className="reveal">
      <button
        onClick={() =>
          setSnippetShown(true)
        }
      >
        Reveal Content
      </button>
    </div>
  );
}

export default RevealableSection;
