import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

// Define the props for the CodeBlock component
interface CodeBlockProps {
  codeString: string;
  language?: string;
  customStyle?: React.CSSProperties; // Optional custom styling for more flexibility
}

// Create a mapping of comment annotations to language identifiers
const LANGUAGE_MAP: { [key: string]: string } = {
  "/* jsx */": "jsx",
  "/* js */": "javascript",
  "/* css */": "css",
  "<!-- html -->": "html",
  "/* ts */": "typescript",
};

// Refactored function to detect the language from code comments
export function getLanguageFromCode(codeStr: string): string {
  for (const comment in LANGUAGE_MAP) {
    if (codeStr.includes(comment)) {
      return LANGUAGE_MAP[comment];
    }
  }
  return "javascript"; // Default to JavaScript
}

// CodeBlock component with configurable styles and language
export const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  language = "javascript",
  customStyle = {},
}) => {
  // Merge default style with optional customStyle prop
  const combinedStyle: React.CSSProperties = {
    fontFamily: "Roboto",
    fontSize: "0.9rem",
    fontWeight: 500,
    ...customStyle,
  };

  return (
    <div className="bg-purple-500 p-4 rounded-md shadow-md">
      <SyntaxHighlighter language={language} style={a11yDark} customStyle={combinedStyle}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};
