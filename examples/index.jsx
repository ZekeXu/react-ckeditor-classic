import React from 'react';
import { render} from 'react-dom';
import ReactEditor from '../lib/reacteditor';
const App = () => (
    <ReactEditor />
);
render(<App />, document.getElementById("root"));