import React from 'react';
import { ViewType, TransitionType } from '../types';

interface LicensesTempProps {
  onViewChange: (view: ViewType, transition?: TransitionType) => void;
}

const LicensesTemp: React.FC<LicensesTempProps> = ({ onViewChange }) => {
  const handleBackClick = (): void => {
    onViewChange('settings-main', 'fade');
  };

  const buttonStyle: React.CSSProperties = { 
    position: 'fixed', 
    top: '20px', 
    right: '20px', 
    padding: '10px 20px',
    background: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  const preStyle: React.CSSProperties = { 
    whiteSpace: 'pre-wrap', 
    fontSize: '12px' 
  };

  const containerStyle: React.CSSProperties = { 
    color: 'black', 
    background: 'white', 
    padding: '20px', 
    height: '100vh', 
    overflow: 'auto' 
  };

  return (
    <div style={containerStyle}>
      <button 
        onClick={handleBackClick}
        style={buttonStyle}
      >
        Back
      </button>
      
      <h2>Open Source Licenses:</h2>
      <ul>
        <li>
          <a href="https://github.com/alexanderdickson/waitForImages/blob/master/README.md" target="_blank" rel="noopener noreferrer">
            waitForImages
          </a>
          <br /><br />
          <pre style={preStyle}>
{`Copyright (c) 2014 Alex Dickson

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.`}
          </pre>
        </li>
      </ul>
    </div>
  );
};

export default LicensesTemp;