import React, { useState, useEffect } from 'react';

export function Code() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const combinedCode = `
        <html>
          <head>
            <style>${cssCode}</style>
          </head>
          <body>
            ${htmlCode}
            <script>${jsCode}</script>
          </body>
        </html>
      `;
      setPreview(combinedCode);
    }, 2000); // Update every 2 seconds

    return () => clearInterval(intervalId);
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-hidden p-4 bg-editor-content-area">
        <div className="grid grid-cols-3 gap-4 bg-editor h-full">
          <textarea
            className="border p-2 h-full resize-none"
            placeholder="HTML"
            value={htmlCode}
            onChange={(e) => setHtmlCode(e.target.value)}
          />
          <textarea
            className="border p-2 h-full resize-none"
            placeholder="CSS"
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
          />
          <textarea
            className="border p-2 h-full resize-none"
            placeholder="JavaScript"
            value={jsCode}
            onChange={(e) => setJsCode(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 border-t overflow-hidden bg-editor-content-area">
        <iframe className="w-full h-full" title="Preview" srcDoc={preview} />
      </div>
    </div>
  );
}
