import React from 'react';
import Notebook from './Notebook';

import React from 'react';
import { WidgetManager } from 'react-ipywidgets';

function BlogPost() {
  return (
    <div>
      <h1>My Blog Post</h1>
      <p>Here's some text about my blog post.</p>
      <Notebook notebookUrl="https://example.com/notebook.ipynb" />
    </div>
  );
}

export default BlogPost;