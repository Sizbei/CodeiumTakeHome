import React from 'react';
import { ReactComponent as Logo } from 'assets/codeium_logo_wordmark.svg';

export function Header() {
  return (
    <header className="flex items-center justify-between bg-surface text-white py-4 px-6">
      <div className="flex items-center">
        <Logo height={50} width={200} />
      </div>
      <div className="flex space-x-4">
        <button className="bg-surface-200 hover:bg-surface-500 text-black px-6 py-2 rounded">
          Download
        </button>
        <button className="bg-brand-dark hover:bg-brand-dark-200 text-white px-8 py-2 rounded">
          +New Pen
        </button>
      </div>
    </header>
  );
}
