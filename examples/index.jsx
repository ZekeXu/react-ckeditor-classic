import React from 'react';
import { render} from 'react-dom';
import ReactEditor from '../src';
const App = () => (
    <ReactEditor
        data="Hello ReactEditor"
        onChange={v => console.warn(v)}
        config={{
            uploadUrl: 'http://localhost:8080/auth/upload'
        }}
    />
);
render(<App />, document.getElementById("root"));