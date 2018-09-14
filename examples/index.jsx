import React from 'react';
import { render} from 'react-dom';
import ReactEditor from '../src';
const App = () => (
    <ReactEditor
        data="Hello ReactEditor"
        onChange={(data, editor, event) => console.warn(data, editor, event)}
        config={{
            uploadUrl: 'http://localhost:8080/auth/upload'
        }}
    />
);
render(<App />, document.getElementById("root"));