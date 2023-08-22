import React, { useState, useEffect } from 'react';
import MonacoEditor from '@monaco-editor/react';

export function Code() {
  const [htmlCode, setHtmlCode] = useState('');
  const [cssCode, setCssCode] = useState('');
  const [jsCode, setJsCode] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
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
  }, [htmlCode, cssCode, jsCode]);

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-1 overflow-hidden p-4 bg-editor-content-area">
        <div className="grid grid-cols-3 gap-4 bg-editor h-full">
          <MonacoEditor
            className="border p-2 h-full resize-none bg-editor-content-area"
            height="90vh"
            language="html"
            value={htmlCode}
            onChange={setHtmlCode}
            defaultValue="// htmladfasf"
            options={{
              theme: 'vs-dark',
              automaticLayout: true,
            }}
          />
          <MonacoEditor
            className="border p-2 h-full resize-none bg-editor-content-area"
            height="90vh"
            defaultLanguage="css"
            value={cssCode}
            onChange={setCssCode}
            defaultValue="// css"
            options={{
              theme: 'vs-dark',
              automaticLayout: true,
            }}
          />
          <MonacoEditor
            className="border p-2 h-full resize-none bg-editor-content-area"
            height="90vh"
            defaultLanguage="javascript"
            value={jsCode}
            onChange={setJsCode}
            defaultValue="// js"
            options={{
              theme: 'vs-dark',
              automaticLayout: true,
            }}
          />
        </div>
      </div>
      <div className="flex-1 border-t overflow-hidden bg-editor-content-area">
        <iframe className="w-full h-full" title="Preview" srcDoc={preview} />
      </div>
    </div>
  );
}
