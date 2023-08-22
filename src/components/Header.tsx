import React from 'react';

export function Header({ title }: { title: string }) {
  return (
    <header className="flex items-center justify-between bg-gray-900 text-white py-4 px-6">
      <div className="flex items-center">
        <svg
          className="h-8 w-8 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {/* Replace this with your SVG logo */}
          <path fillRule="evenodd" d="M10 ..." />
        </svg>
        <h1 className="text-5xl">{title}</h1>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
          Download
        </button>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
          Button
        </button>
      </div>
    </header>
  );
}
