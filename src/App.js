import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ReactMarkdown from 'react-markdown';

import './logo.svg';

function App() {
  const placeholder = `
**WELCOME TO MARKDOWN PREVIEWER**

# This is H1 header #
## This is H2 subheader ##

**BLOCK CODE**
\`\`\`javascript
function greeting() {
  return 'Hello, Markdown!';
}
\`\`\`

**INLINE CODE**
\`const preview = 0;\`

**LIST**
- Item 1
- Item 2
- Item 3

**BLOCKQUOTE**
> A blockquote would look great below the second list item.

**IMAGE:**
![Javatpoint](https://media-exp1.licdn.com/dms/image/C4D0BAQEwg5FK93uumQ/company-logo_200_200/0/1519923012279?e=2147483647&v=beta&t=63CNoS8OTR4lHjPhHSO7eFFqwLGwYunWfyDBV3tdc0c)

**LINK:**
[Javatpoint](https://www.javatpoint.com/)
`;

  const [markdown, setMarkdown] = useState(placeholder);

  const handleChange = (event) => {
    setMarkdown(event.target.value);
  };

  const replaceCarriage = (markdown) => {
    return markdown.replace(/\r\n/g, '\n');
  }

  const containerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    minHeight: '100vh',
  };

  const editorStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    height: 'calc(50vh - 45px)', // Adjust the height of the textarea
    overflow: 'auto',
  };

  const previewStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #ccc',
    borderRadius: '5px',
    padding: '10px',
    height: 'calc(50vh - 45px)', // Same height as the textarea
    overflow: 'auto',
    whiteSpace: 'pre-wrap',
  };

  const headingStyle = {
    backgroundColor: "white",
    color: "black",
    padding: "8px 12px",
    fontSize: "24px",
  };

  return (
    <div className="App" style={containerStyle}>
      <div className="container">
      <div className="row mt-4">
        <div className="col text-center">
          <h1>
           <Badge 
           className="text-align-center" style={headingStyle}>
              Markdown Previewer
           </Badge>
          </h1>
        </div>
      </div>
        <div className="row mt-4">
          <div className="col-md-6">
            {/* Editor */}
            <h4 style={{ textAlign: 'center' }}>
              <Badge style={{ backgroundColor: '#007bff' }} variant="light">
                Markdown Input
              </Badge>
            </h4>
            <div style={editorStyle}>
              <textarea
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '5px', padding: '10px' }}
                id="editor"
                value={markdown}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>
          {/* Previewer */}
          <div className="col-md-6">
            <div className="col text-center">
              <h4 style={{ textAlign: 'center' }}>
                <Badge style={{ backgroundColor: '#6c757d' }} variant="light">
                  Preview
                </Badge>
              </h4>
            </div>
            <div style={previewStyle}>
              <ReactMarkdown>{replaceCarriage(markdown)}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
